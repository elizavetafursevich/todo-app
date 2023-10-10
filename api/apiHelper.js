import axios from "axios";

export const httpRequest = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 1000
});