import axios from "axios";

const axiosClient = axios.create({
  // common base url for all the api
  baseURL: "http: //localhost:8000/api",
});
export default axiosClient;
