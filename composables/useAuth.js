/* Provide the method that get token and user info */

import useFetchApi from "./useFetchApi";

export default () => {
  /* useState: Provided by Nuxt */
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const login = ({ username, password }) =>
    new Promise(async (res, rej) => {
      try {
        const data = await $fetch("/api/auth/login", {
          method: "POST",
          body: { username, password },
        });

        setToken(data.access_token);
        setUser(data.user);

        res(true);
      } catch (error) {
        rej(error);
      }
    });

  const refreshToken = () =>
    new Promise(async (res, rej) => {
      try {
        const data = await $fetch("/api/auth/refresh");

        setToken(data.access_token);
        res(true);
      } catch (error) {
        rej(error);
      }
    });

  const getUser = () =>
    new Promise(async (res, rej) => {
      try {
        const data = await useFetchApi("/api/auth/user");

        setUser(data.user);
        res(true);
      } catch (error) {
        rej(error);
      }
    });

  const initAuth = () =>
    new Promise(async (res, rej) => {
      try {
        await refreshToken();
        await getUser();

        res(true);
      } catch (error) {
        rej(error);
      }
    });
  return { login, useAuthUser, useAuthToken, initAuth };
};
