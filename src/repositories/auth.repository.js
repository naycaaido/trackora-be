export function createAuthRepository(prisma) {
  const findUserByEmail = (email) =>
    prisma.user.findUnique({
      where: { email },
    });

  const createUser = (data) =>
    prisma.user.create({
      data,
    });

  const updateLastLoginAt = (id) =>
    prisma.user.update({
      where: { id },
      data: {
        lastLoginAt: new Date(),
      },
    });

  const createRefreshToken = (data) =>
    prisma.refreshToken.create({
      data,
    });

  const findRefreshTokenByHash = (tokenHash) =>
    prisma.refreshToken.findUnique({
      where: { token: tokenHash },
      include: {
        user: true,
      },
    });

  const revokeRefreshTokenById = (id) =>
    prisma.refreshToken.updateMany({
      where: {
        id,
        isRevoked: false,
      },
      data: {
        isRevoked: true,
      },
    });

  const revokeRefreshTokenByHash = (tokenHash) =>
    prisma.refreshToken.updateMany({
      where: {
        token: tokenHash,
        isRevoked: false,
      },
      data: {
        isRevoked: true,
      },
    });

  const revokeRefreshTokenFamily = (family) =>
    prisma.refreshToken.updateMany({
      where: {
        family,
        isRevoked: false,
      },
      data: {
        isRevoked: true,
      },
    });

  const rotateRefreshToken = async (currentTokenId, nextTokenData) =>
    prisma.$transaction(async (tx) => {
      await tx.refreshToken.updateMany({
        where: {
          id: currentTokenId,
          isRevoked: false,
        },
        data: {
          isRevoked: true,
        },
      });

      return tx.refreshToken.create({
        data: nextTokenData,
      });
    });

  return {
    findUserByEmail,
    createUser,
    updateLastLoginAt,
    createRefreshToken,
    findRefreshTokenByHash,
    revokeRefreshTokenById,
    revokeRefreshTokenByHash,
    revokeRefreshTokenFamily,
    rotateRefreshToken,
  };
}

