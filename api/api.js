import axios from "axios";
// const accessToken = sessionStorage.getItem("accessToken");
//process.env.REACT_APP_BUSINESS_API

export const ProductApi = axios.create({
  baseURL: "http://172.20.10.3:5000/myshop/product",
  headers: {
    "content-type": "application/json",
  },
});

ProductApi.interceptors.request.use(
  async (config) => {
    // const accessToken = sessionStorage.getItem("accessToken");
    // config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const UserApi = axios.create({
  baseURL: "http://172.20.10.3:5000/myshop/user",
  headers: {
    "content-type": "application/json",
  },
});

UserApi.interceptors.request.use(
  async (config) => {
    // const accessToken = sessionStorage.getItem("accessToken");
    // config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
