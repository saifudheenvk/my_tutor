import { baseURL } from "../../constants";
import { SignUpRequest } from "../../utils/types/actions/user";
import axiosInstance from "../axios";


export async function getMyDetails() {
    axiosInstance.get(`${baseURL}/api/users/myinfo`).then(res => {
        return res.data;
    })
}

export async function registerUser(data: SignUpRequest) {
    return axiosInstance.post(`${baseURL}/api/users/register`, data).then(res => {
        return res.data;
    })
}
