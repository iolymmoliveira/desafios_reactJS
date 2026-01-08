import type { OrderDTO } from "../models/order";

export function save(cart : OrderDTO) {
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem("com.devsuperior.dscommerce/Cart", stringifiedCart);
}

export function get() : OrderDTO {
  const key = localStorage.getItem("com.devsuperior.dscommerce/Cart") || '{"items":[]}';
  return JSON.parse(key);
}