import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { HttpError } from "../lib/errors.js";
import {
  hashToken,
  parseExpiresInToMs,
  signAccessToken,
  signRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../lib/auth-token.js";

function toPublicUser(user) {
  return {
    id: user.id,
    email: user.email,
    role: user.role,
    fullName: user.fullName,
    avatarUrl: user.avatarUrl,
  };
}

function getTokenPayload(decodedToken) {
  if (
    !decodedToken ||
    typeof decodedToken !== "object" ||
    typeof decodedToken.sub !== "string"
  ) {
    throw new HttpError(401, "Invalid token payload");
  }

  return decodedToken;
}

export function createAuthService(authRepository, authConfig) {
  const issueTokens = async (user, family = randomUUID(), rotateFromTokenId = null) => {
    const accessToken = signAccessToken(
      { sub: user.id, role: user.role },
      authConfig.accessTokenSecret,
      authConfig.accessTokenExpiresIn,
    );

    const refreshTokenId = randomUUID();
    const refreshToken = signRefreshToken(
      {
        sub: user.id,
        family,
        jti: refreshTokenId,
      },
      authConfig.refreshTokenSecret,
      authConfig.refreshTokenExpiresIn,
    );

    const refreshTokenRecord = {
      id: refreshTokenId,
      userId: user.id,
      token: hashToken(refreshToken),
      family,
      expiresAt: new Date(
        Date.now() + parseExpiresInToMs(authConfig.refreshTokenExpiresIn),
      ),
    };

    if (rotateFromTokenId) {
      await authRepository.rotateRefreshToken(rotateFromTokenId, refreshTokenRecord);
    } else {
      await authRepository.createRefreshToken(refreshTokenRecord);
    }

    return {
      accessToken,
      refreshToken,
      user: toPublicUser(user),
    };
  };

  const register = async (payload) => {
    const existingEmail = await authRepository.findUserByEmail(payload.email);
    if (existingEmail) {
      throw new HttpError(409, "Email is already registered");
    }

    const passwordHash = await bcrypt.hash(payload.password, 10);
    const user = await authRepository.createUser({
      id: randomUUID(),
      email: payload.email,
      role: payload.role,
      passwordHash,
      fullName: payload.fullName,
    });

    return issueTokens(user);
  };

  const login = async (payload) => {
    const user = await authRepository.findUserByEmail(payload.email);
    if (!user || !user.isActive) {
      throw new HttpError(401, "Invalid credentials");
    }

    const passwordMatches = await bcrypt.compare(payload.password, user.passwordHash);
    if (!passwordMatches) {
      throw new HttpError(401, "Invalid credentials");
    }

    await authRepository.updateLastLoginAt(user.id);
    return issueTokens(user);
  };

  const refreshSession = async (rawRefreshToken) => {
    let decodedToken;
    try {
      decodedToken = verifyRefreshToken(rawRefreshToken, authConfig.refreshTokenSecret);
    } catch {
      throw new HttpError(401, "Invalid refresh token");
    }

    const refreshPayload = getTokenPayload(decodedToken);
    const storedToken = await authRepository.findRefreshTokenByHash(
      hashToken(rawRefreshToken),
    );

    const isMissing = !storedToken;
    const isExpired = storedToken
      ? new Date(storedToken.expiresAt).getTime() <= Date.now()
      : false;
    const isRevoked = storedToken ? storedToken.isRevoked : false;

    if (isMissing || isExpired || isRevoked) {
      if (typeof refreshPayload.family === "string" && refreshPayload.family) {
        await authRepository.revokeRefreshTokenFamily(refreshPayload.family);
      }
      throw new HttpError(401, "Refresh token is invalid or expired");
    }

    if (!storedToken.user.isActive) {
      await authRepository.revokeRefreshTokenFamily(storedToken.family);
      throw new HttpError(403, "User account is inactive");
    }

    return issueTokens(storedToken.user, storedToken.family, storedToken.id);
  };

  const logout = async (rawRefreshToken) => {
    if (!rawRefreshToken) {
      return;
    }

    await authRepository.revokeRefreshTokenByHash(hashToken(rawRefreshToken));
  };

  const authenticateAccessToken = async (rawAccessToken) => {
    let decodedToken;
    try {
      decodedToken = verifyAccessToken(rawAccessToken, authConfig.accessTokenSecret);
    } catch {
      throw new HttpError(401, "Invalid access token");
    }

    const accessPayload = getTokenPayload(decodedToken);
    if (typeof accessPayload.role !== "string" || !accessPayload.role) {
      throw new HttpError(401, "Invalid token payload");
    }

    return {
      id: accessPayload.sub,
      role: accessPayload.role,
    };
  };

  return {
    register,
    login,
    refreshSession,
    logout,
    authenticateAccessToken,
  };
}

