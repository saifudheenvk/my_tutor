import axios, { AxiosRequestConfig } from "axios";
import { baseURL } from "../constants";


const axiosInstance = axios.create({ baseURL: baseURL });
axiosInstance.defaults.timeout = 2500;


const requestHandler = (request: AxiosRequestConfig) => {
    const { headers } = request;
    if (headers) {
        let token = localStorage.getItem('userToken')
        headers.Authorization = `Bearer ${token}`
        request.headers = headers
    }
    return request;
};

axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => requestHandler(request))
export default axiosInstance;