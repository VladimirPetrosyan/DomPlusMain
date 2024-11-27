import axios from "axios";

// Создаем экземпляр Axios с базовым URL
const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, // Берем URL из переменной окружения
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;