// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7218/api",
  withCredentials: false
});

export default api;
