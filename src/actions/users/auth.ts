import { baseURL } from "../../constants";
import { LoginRequest } from "../../utils/types/actions/user";
import axiosInstance from "../axios";


export async function authenticateUser(data: LoginRequest) {
    axiosInstance.post(`${baseURL}/api/auth/login`).then(res => {
        return res.data;
    })
}


export async function logoutUser() {
    axiosInstance.post(`${baseURL}/api/auth/logout`).then(res => {
        return res.data;
    })
}
