import axios from "axios";

export const api = axios.create({
    baseURL: "http://back-no-sql-production.up.railway.app/api",
});
