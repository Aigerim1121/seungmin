import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://api.myjson.online/v1/records/4560fab8-41b9-4741-8e48-f4d82da5b602"
})