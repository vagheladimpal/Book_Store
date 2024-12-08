import axios from "axios";

export const instance = axios.create({
    baseURL: "http://192.168.1.5:8000/", // Removed extra space
    headers: {
        "Content-Type": "application/json"
    }
});
