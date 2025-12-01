import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_URL,   // change to your API URL
});

// Load token from localStorage if exists
const token = localStorage.getItem("auth_token");

if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default api;
