import { createUser } from "~~/server/db/users";
import { userTransformer } from "~~/server/transformers/user";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";
import { createRefreshToken } from "~~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, email, password, repeatPassword, name } = body;

  if (!username || !email || !password || !repeatPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid params" })
    );
  }

  if (password !== repeatPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Password do not match" })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://avatars.githubusercontent.com/u/73094393?s=40&v=4",
  };
  const user = await createUser(userData);

  // Generate Tokens
  // Access Token
  // Refresh Token

  const { accessToken, refreshToken } = generateTokens(user);

  // Save it inside DB

  await createRefreshToken({
    token: refreshToken,
    userId: user.id,
  });

  // Add HTTP only cookie

  sendRefreshToken(event, refreshToken);

  return { access_token: accessToken, user: userTransformer(user) };
});
