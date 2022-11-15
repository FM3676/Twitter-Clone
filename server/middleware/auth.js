/* 
    Grab info from access_token and decode it and save it and attach it to the request
*/

import UrlPattern from "url-pattern";
import { getUserById } from "../db/users";
import { decodeAccessToken } from "../utils/jwt";

export default defineEventHandler(async (event) => {
  const endpoints = [
    "/api/auth/user",
    "/api/user/tweets",
    "/api/tweets",
    "/api/tweets/:id",
  ];

  // Match if the url is for user
  const isHandleByThisMiddleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint);

    return pattern.match(event.req.url);
  });

  if (!isHandleByThisMiddleware) return;

  const token = event.req.headers["authorization"]?.split(" ")[1];

  const decoded = decodeAccessToken(token);

  if (!decoded)
    return sendError(
      event,
      createError({ statusCode: 401, statusMessage: "Unauthorized" })
    );

  try {
    const userId = decoded.userId;
    const user = await getUserById(userId);

    event.context.auth = { user };
  } catch (error) {
    return;
  }
});
