import { baseURL } from "../../constants";
import { LoginRequest } from "../../utils/types/actions/user";
import axiosInstance from "../axios";


export async function authenticateUser(data: LoginRequest) {
    return axiosInstance.post(`${baseURL}/api/auth/login`).then(res => {
        return res.data;
    })
}


export async function logoutUser() {
    return axiosInstance.post(`${baseURL}/api/auth/logout`).then(res => {
        return res.data;
    })
}
