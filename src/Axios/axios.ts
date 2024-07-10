import axios from "axios";

export const baseURL =
  "https://appointment-booking-server-3.onrender.com/api/v1/";
const axiosInstance = axios.create({ baseURL, withCredentials: true });
export const setHeader = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
export default axiosInstance;
