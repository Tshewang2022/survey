import axios from "axios";
import store from "./store";
const axiosClient = axios.create({
  // common base url for all the api
  baseURL: "http://localhost:8000",
});
axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  return config;
});
export default axiosClient;
