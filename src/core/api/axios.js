import axios from "axios";
import { getCookie } from "../../shared/Cookie";

export const instance = axios.create({
  baseURL: "https://kiml2175-dk.shop",
  headers: {
    "Access-Control-Allow-Origin": "*",
    //"Content-type": "multipart/form-data",
  },
});

export const instance2 = axios.create({
  baseURL: "https://kiml2175-dk.shop",
  headers: {
    "Access-Control-Allo w-Origin": "*",
    "Content-type": "multipart/form-data",
  },
});

export const instance3 = axios.create({
  baseURL: "https://kiml2175-dk.shop",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//req헤더에 토큰
// 우리쪽 헤더에 토큰을 달았으니 필요한 부분에서 cookie 만 불러오면 되는건가
instance2.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = getCookie("userToken");
  config.headers["Authorization"] = `${token}`;
  return config;
});

instance3.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = getCookie("userToken");
  config.headers["Authorization"] = `${token}`;
  return config;
});
