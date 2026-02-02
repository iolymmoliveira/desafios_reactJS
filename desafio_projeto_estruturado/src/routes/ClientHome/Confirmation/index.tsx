import { useEffect, useState } from "react";
import "./styles.css";
import type { OrderDTO } from "../../../models/order";
import * as orderService from "../../../services/order-service";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/Button";

export default function Confirmation() {
  const params = useParams();
  const [order, setOrder] = useState<OrderDTO>();

  useEffect(() => {
    orderService
      .findByIdRequest(Number(params.orderId))
      .then((response) => {
        setOrder(response.data);
      })
  }, []);

  return (
    <main>
      <section id="confirmation-section" className="dsc-container">
        <div className="dsc-card">
          {order?.items.map((item) => (
            <div
              key={item.productId}
              className="dsc-cart-item-container dsc-line-bottom"
            >
              <div className="dsc-cart-item-left">
                <img src={item.imgUrl} alt="Computador" />
                <div className="dsc-cart-item-description">
                  <h3>{item.name}</h3>
                  <div className="dsc-cart-item-quantity-container">
                    <p>{item.quantity}</p>
                  </div>
                </div>
              </div>
              <div className="dsc-cart-item-right">
                R$ {item.subTotal.toFixed(2)}
              </div>
            </div>
          ))}
          <div className="dsc-cart-total-container">
            <h3>R$ {order?.total.toFixed(2)}</h3>
          </div>
        </div>
        <div className="dsc-confirmation-message">
          Pedido realizado! Número {order?.id}
        </div>
        <div className="dsc-btn-page-container">
          <Link to="/">
            <Button text="Início" variant="secondary" className="dsc-confirmation-start" />
          </Link>
        </div>
      </section>
    </main>
  );
}
