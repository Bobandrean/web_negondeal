import authServices from "~~/services/authServices";

import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(
    process.client ? JSON.parse(localStorage.getItem("user")) : "" || {}
  );
  const isAuth = ref(
    process.client ? JSON.parse(localStorage.getItem("isAuth")) : "" || false
  );

  const getUser = computed(() => user.value);
  const getAuth = computed(() => isAuth.value);

  const setUser = (data) => {
    user.value = data;
  };

  const setAuth = (data) => {
    isAuth.value = data;
  };

  async function login(payload) {
    try {
      const res = await authServices.login({ payload });
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        localStorage.setItem("isAuth", true);
        localStorage.setItem("access_token", res?.data?.sanctum?.accessToken);
      }
      setUser(res?.data?.user);
      setAuth(true);

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      const res = await authServices.logout();
      if (process.client) {
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
        localStorage.removeItem("access_token");
      }
      setUser({});
      setAuth(false);
      return res;
    } catch (error) {
      if (process.client) {
        localStorage.removeItem("user");
        localStorage.removeItem("isAuth");
        localStorage.removeItem("access_token");
        location.reload();
      }
      console.error(error);
    }
  }

  async function fetchUser() {
    try {
      const res = await authServices.getUser();

      setBlog(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser(payload) {
    try {
      const res = await authServices.createUser({
        payload,
      });

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    createUser,
    login,
    fetchUser,
    getUser,
    getAuth,
    logout,
  };
});
