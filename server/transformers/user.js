/* Prevent the response body send back the password by selecting the data that we want to send back*/

export const userTransformer = (user) => ({
  username: user.username,
  email: user.email,
  name: user.name,
  profileImage: user.profileImage,
  handle: "@" + user.name,
});
