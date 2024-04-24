import axios from "axios";

export const baseURL = "http://localhost:5000/api/v1/";
const axiosInstance = axios.create({ baseURL, withCredentials: true });
export const setHeader = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export default axiosInstance;
