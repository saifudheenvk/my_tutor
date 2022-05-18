import { baseURL } from "../../constants";
import axiosInstance from "../axios";


export async function getMyDetails() {
    axiosInstance.get(`${baseURL}/api/users/myinfo`).then(res => {
        return res.data;
    })
}
