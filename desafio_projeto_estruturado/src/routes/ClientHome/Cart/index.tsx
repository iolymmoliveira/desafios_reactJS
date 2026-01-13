import "./styles.css";
import Button from "../../../components/Button";
import { useContext, useState } from "react";
import * as cartService from "../../../services/cart-service";
import type { OrderDTO } from "../../../models/order";
import { Link, useNavigate } from "react-router-dom";
import { ContextCartCount } from "../../../utils/context-cart";
import * as orderService from "../../../services/order-service";

export default function Cart() {
  const [cart, setCart] = useState<OrderDTO>(cartService.getCart());
  const { setContextCartCount } = useContext(ContextCartCount);
  const navigate = useNavigate();

  function handleClearClick() {
    cartService.clearCart();
    updateCart();
  }

  function handleIncreaseItem(productId: number) {
    cartService.increaseItem(productId);
    setCart(cartService.getCart());
  }

  function handleDecreaseItem(productId: number) {
    cartService.decreaseItem(productId);
    updateCart();
  }

  function updateCart() {
    const newCart = cartService.getCart();
    setCart(cartService.getCart());
    setContextCartCount(newCart.items.length);
  }

  function handleRegisterOrderClick() {
    orderService
      .registerOrderRequest(cart)
      .then((response) => {
        cartService.clearCart();
        setContextCartCount(0);
        navigate(`/confirmation/${response.data.id}`);
      })
      .catch((error) => {
        console.error("Erro completo:", error);
        console.error("Response:", error.response);
        alert("Erro ao finalizar pedido");
      });
  }

  return (
    <>
      <main>
        <section id="cart-container-section" className="dsc-container">
          {cart.items.length === 0 ? (
            <div>
              <h2 className="dsc-cart-empty">Seu carrinho está vazio</h2>
            </div>
          ) : (
            <div className="dsc-card">
              {cart.items.map((item) => (
                <div
                  key={item.productId}
                  className="dsc-cart-item-container dsc-line-bottom"
                >
                  <div className="dsc-cart-item-left">
                    <img src={item.imgUrl} alt="Computador" />
                    <div className="dsc-cart-item-description">
                      <h3>{item.name}</h3>
                      <div className="dsc-cart-item-quantity-container">
                        <div
                          onClick={() => handleDecreaseItem(item.productId)}
                          className="dsc-cart-item-quantity-btn"
                        >
                          -
                        </div>
                        <p>{item.quantity}</p>
                        <div
                          onClick={() => handleIncreaseItem(item.productId)}
                          className="dsc-cart-item-quantity-btn"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dsc-cart-item-right">
                    R$ {item.subTotal.toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="dsc-cart-total-container">
                <h3>R$ {cart.total.toFixed(2)}</h3>
              </div>
            </div>
          )}
          <div className="dsc-btn-page-container">
            <Button
              text="Finalizar pedido"
              variant="primary"
              className="dsc-cart-button"
              onClick={handleRegisterOrderClick}
            />
            <Link to="/catalog" className="dsc-link-container">
              <Button
                text="Continuar comprando"
                variant="secondary"
                className="dsc-cart-button"
              />
              <Button
                text="Limpar carrinho 🗑️"
                variant="secondary"
                className="dsc-cart-button"
                onClick={handleClearClick}
              />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
