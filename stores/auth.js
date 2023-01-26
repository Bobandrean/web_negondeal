import authServices from "~~/services/authServices";
import Swal from "sweetalert2";
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
      const res = await authServices.login({
        payload,
      });
      if (process.client) {
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        localStorage.setItem("isAuth", true);
        localStorage.setItem("access_token", res?.data?.sanctum?.accessToken);
      }
      setUser(res?.data?.user);
      setAuth(true);
      Swal.fire({
        icon: "success",
        title: "Welcome to Nego N Deal",
        text: "You Have Been Logged In Successfully",
      });
      return res;
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Welcome to Nego N Deal",
        text: "Email Or Password Salah",
      });
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

      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function createUser(payload) {
    try {
      const res = await authServices.createUser({
        payload,
      });
      Swal.fire({
        icon: "success",
        title: "Welcome to Nego N Deal",
        text: "Sukses Register",
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
