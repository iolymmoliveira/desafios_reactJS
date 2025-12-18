import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { BASE_URL } from "./system";
import { history } from "./history";

export function requestBackend(config: AxiosRequestConfig) {
  return axios( {...config, baseURL: BASE_URL})
}

axios.interceptors.request.use(
  function (config) {
    // Implements logic here
    return config;
  },
  function (error) {
    // Implements logic here
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if(error.response.status === 401) {
      history.push("/login");
    }
    if(error.response.status === 403) {
      history.push("/login");
      // TODO 
      // Redirecionar para /catalog
    }

    return Promise.reject(error);
  }
);