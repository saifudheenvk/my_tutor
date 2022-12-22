import { baseURL } from "../../constants";
import { ProfileItem, SignUpRequest } from "../../utils/types/actions/user";
import axiosInstance from "../axios";


export async function getMyDetails() {
    return axiosInstance.get(`${baseURL}/api/users/myinfo`).then(res => {
        return res.data;
    })
}

export async function registerUser(data: SignUpRequest) {
    return axiosInstance.post(`${baseURL}/api/users/register`, data).then(res => {
        return res.data;
    })
}


export async function getUserDetails(id: string) {
    return axiosInstance.get(`${baseURL}/api/users/${id}`).then(res => {
        return res.data;
    })
}

export async function updateUserDetails(data: ProfileItem) {
    return axiosInstance.put(`${baseURL}/api/users`, data).then(res => {
        return res.data;
    })
}