import { HttpError } from "../lib/errors.js";

export function createAuthController(authService, authCookieConfig) {
  const setRefreshCookie = (res, token) => {
    res.cookie(authCookieConfig.name, token, authCookieConfig.options);
  };

  const register = async (req, res) => {
    const result = await authService.register(req.validatedBody);
    setRefreshCookie(res, result.refreshToken);

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: {
        user: result.user,
        accessToken: result.accessToken,
      },
    });
  };

  const login = async (req, res) => {
    const result = await authService.login(req.validatedBody);
    setRefreshCookie(res, result.refreshToken);

    res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        user: result.user,
        accessToken: result.accessToken,
      },
    });
  };

  const refresh = async (req, res) => {
    const refreshToken = req.cookies?.[authCookieConfig.name];
    if (!refreshToken) {
      throw new HttpError(401, "Refresh token cookie is required");
    }

    const result = await authService.refreshSession(refreshToken);
    setRefreshCookie(res, result.refreshToken);

    res.status(200).json({
      status: "success",
      message: "Token refreshed successfully",
      data: {
        user: result.user,
        accessToken: result.accessToken,
      },
    });
  };

  const logout = async (req, res) => {
    const refreshToken = req.cookies?.[authCookieConfig.name];
    await authService.logout(refreshToken);
    res.clearCookie(authCookieConfig.name, authCookieConfig.options);

    res.status(200).json({
      status: "success",
      message: "Logout successful",
      data: null,
    });
  };

  return {
    register,
    login,
    refresh,
    logout,
  };
}

