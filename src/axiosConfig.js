import axios from "axios";

// Создаем экземпляр Axios с базовым URL
const BASE_URL =
    typeof process !== "undefined" && process.env.REACT_APP_API_BASE_URL
        ? process.env.REACT_APP_API_BASE_URL
        : "https://api.dompluse.com";

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;