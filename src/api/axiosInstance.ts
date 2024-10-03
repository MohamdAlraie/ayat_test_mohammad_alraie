import axios from "axios";
import { store } from "../app/store";
import { refreshAccessToken, logout } from "../features/auth/authSlice";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.accessToken;
    if (token && config.headers) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const result = await store.dispatch(refreshAccessToken());
        if (result.payload) {
          // Update the Authorization header with new access token
          originalRequest.headers["Authorization"] = `Bearer ${result.payload}`;
          return axiosInstance(originalRequest);
        }
      } catch (err) {
        store.dispatch(logout());
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
