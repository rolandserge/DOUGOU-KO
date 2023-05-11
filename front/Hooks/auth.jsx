import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import axiosAuth from "../Libs/axios";

export const useAuth = ({ middleware } = {}) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/api/me", () =>
    axiosAuth.get("/api/me").then((response) => response.data.data)
  );

  //CSRF
  const csrf = () => axiosAuth.get("/sanctum/csrf-cookie");

  //login form
  const Login = async ({ ...props }) => {
    await csrf();

    axiosAuth
      .post("/api/login", props)
      .then((response) => {
        if (response.data.status == 200) {
            router.back()
        } else if (response.data.status == 401) {
          console.log(response.data.message);
        }
      })
      .catch((error) => console.log(error));
  };

  //register
  const register = async ({ ...props }) => {
    await csrf();

    axiosAuth
      .post("/api/register", props)
      .then((response) => {
        if (response.data.status == 200) {
          mutate() && router.push("/Auth/login");
        }
      })
      .catch((error) => console.log(error));
  };

  //logout de l'utilisateur
  const logout = async () => {
    try {
      await axiosAuth.post("/api/logout");

      mutate(null, false);

      router.push("/Auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user || error) {
      setIsLoading(false);
    }
    if (middleware === "guest" && user) router.back();
    if (middleware === "auth" && !user && error) router.push(`/Auth/login`);
  }, [user, error]);

  return {
    register,
    user,
    Login,
    csrf,
    logout,
    isLoading,
  };
};
