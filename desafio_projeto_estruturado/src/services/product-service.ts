import axios, { type AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { BASE_URL } from "../utils/system";

export function findPageRequest(
  page: number,
  name: string,
  size = 12,
  sort = "name"
) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/products",
    params: {
      page,
      name,
      size,
      sort,
    },
  };

  return requestBackend(config);
}

export function findById(id: number) {
  return axios.get(`${BASE_URL}/products/${id}`);
}

export function deleteById(id: number){
  const config : AxiosRequestConfig = {
    method: "DELETE",
    url: `/products/${id}`,
    withCredentials: true,
  }

  return requestBackend(config);
}