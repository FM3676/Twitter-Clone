/* Provide the method that get token and user info */

import useFetchApi from "./useFetchApi";
import jwt_deocde from "jwt-decode";

export default () => {
  /* useState: Provided by Nuxt */
  const useAuthToken = () => useState("auth_token");
  const useAuthUser = () => useState("auth_user");
  const useAuthLoading = () => useState("auth_loading", () => true);

  const setToken = (newToken) => {
    const authToken = useAuthToken();
    authToken.value = newToken;
  };

  const setUser = (newUser) => {
    const authUser = useAuthUser();
    authUser.value = newUser;
  };

  const setIsAuthLoading = (value) => {
    const authLoading = useAuthLoading();
    authLoading.value = value;
  };

  const register = ({ username, email, password, repeatPassword, name }) =>
    new Promise(async (res, rej) => {
      try {
        const data = await $fetch("/api/auth/register", {
          method: "POST",
          body: { username, email, password, repeatPassword, name },
        });

        setToken(data.access_token);
        setUser(data.user);

        res(true);
      } catch (error) {
        rej(error);
      }
    });

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

  const reRefreshAccessToken = () => {
    const authToken = useAuthToken();

    if (!authToken.value) return;

    const jwt = jwt_deocde(authToken.value);

    const newRefreshTime = jwt.exp - 60000;

    setTimeout(async () => {
      // Using await to make sure we get a new token.
      await refreshToken();
      reRefreshAccessToken();
    }, newRefreshTime);
  };

  const logout = () =>
    new Promise(async (resolve, reject) => {
      try {
        await useFetchApi("/api/auth/logout", {
          method: "POST",
        });
        setToken(null);
        setUser(null);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });

  const initAuth = () =>
    new Promise(async (res, rej) => {
      setIsAuthLoading(true);
      try {
        await refreshToken();
        await getUser();

        res(true);
      } catch (error) {
        rej(error);
      } finally {
        setIsAuthLoading(false);
      }
    });
  return {
    register,
    login,
    useAuthUser,
    useAuthToken,
    useAuthLoading,
    initAuth,
    logout,
  };
};
