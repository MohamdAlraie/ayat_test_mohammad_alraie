// src/api/authApi.ts

import axios from "axios";

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post(
    "https://dummyjson.com/auth/login",
    {
      username,
      password,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );

  return response.data;
};

export const refreshTokenApi = async (
  refreshToken: string
): Promise<string> => {
  const response = await axios.post(
    "https://dummyjson.com/auth/refresh",
    {
      refreshToken,
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return response.data.accessToken;
};
