import { OrderDTO, OrderItemDTO } from "../models/order";
import { CART_KEY } from "../utils/system";

export function save(cart : OrderDTO) {
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem(CART_KEY , stringifiedCart);
}

export function get() : OrderDTO {
  const key = localStorage.getItem(CART_KEY) || '{"items":[]}';
  const cartObj = JSON.parse(key) as OrderDTO;
  const cart = new OrderDTO();

  cartObj.items.forEach(e => {
    cart.items.push(new OrderItemDTO(
      e.productId,
      e.quantity,
      e.name,
      e.price,
      e.imgUrl
    ))
  });

  return cart;
}

export function clear() {
  localStorage.setItem(CART_KEY, '{"items":[]}');
}