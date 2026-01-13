import type { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import type { OrderDTO } from "../models/order";

export function findByIdRequest(id : number) {
  const config : AxiosRequestConfig = {
    url: `/orders/${id}`,
    withCredentials: true,
  }

  return requestBackend(config);
}

export function registerOrderRequest(cart : OrderDTO) {
  const config : AxiosRequestConfig = {
    url: "/orders",
    method: "POST",
    withCredentials: true,
    data: cart,
  }

  console.log('registerOrderRequest - cart >>> ', cart);
  return requestBackend(config);
}