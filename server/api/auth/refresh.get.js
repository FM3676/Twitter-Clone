import { getRefreshTokenByToken } from "~~/server/db/refreshTokens";
import { getUserById } from "~~/server/db/users";
import { decodeRefreshToken, generateTokens } from "~~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const cookies = useCookies(event);

  // Get refresh token from cookies
  const refreshToken = cookies.refresh_token;

  if (!refreshToken)
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );

  // Get refresh token from database
  const rToken = await getRefreshTokenByToken(refreshToken);

  if (!rToken)
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Refresh token is invalid",
      })
    );

  // Get the refreshToken from database, which includes userId and token itself.

  const token = decodeRefreshToken(refreshToken);

  try {
    const user = await getUserById(token.userId);
    const { accessToken } = generateTokens(user);
    return { access_token: accessToken };
  } catch (error) {
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Something went wrong" })
    );
  }
});
