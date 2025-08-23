import axios from "axios";

export const api = axios.create({
    baseURL: "https://back-no-sql-production.up.railway.app/api",
});
