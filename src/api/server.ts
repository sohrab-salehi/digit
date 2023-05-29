import axios from "axios";

const token = localStorage.getItem("token");

const server = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        Authorization: token || "",
    },
    timeout: 5000,
});

export default server;
