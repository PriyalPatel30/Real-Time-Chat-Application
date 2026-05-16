import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api");
const SOCKET_BASE_URL = import.meta.env.VITE_SOCKET_BASE_URL || import.meta.env.VITE_API_BASE_URL?.replace(/\/api$/, "") || (import.meta.env.MODE === "development" ? "http://localhost:3000" : "/");

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export { SOCKET_BASE_URL };
