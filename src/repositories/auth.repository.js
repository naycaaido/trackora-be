export function createAuthRepository(prisma) {
  const findUserByEmail = (email) =>
    prisma.user.findUnique({
      where: { email },
    });

  const findUserByUsername = (username) =>
    prisma.user.findUnique({
      where: { username },
    });

  const findUserByEmailOrUsername = (identifier) =>
    prisma.user.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
      },
    });

  const findActiveUserById = (id) =>
    prisma.user.findFirst({
      where: {
        id,
        isActive: true,
      },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        fullName: true,
        avatarUrl: true,
      },
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
    findUserByUsername,
    findUserByEmailOrUsername,
    findActiveUserById,
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

