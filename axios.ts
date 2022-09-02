import axios from "axios";

const instance = axios.create({
  baseURL: "https://arjun-portfolio-2-0.herokuapp.com/",
  withCredentials: true,
  headers: { "Access-Control-Allow-Origin": "true" },
});

export default instance;
