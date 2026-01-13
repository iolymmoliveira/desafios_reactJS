import "./styles.css";
import cartIcon from "../../assets/icons/cart.svg";
import { useContext } from "react";
import { ContextCartCount } from "../../utils/context-cart";

export default function CartIcon() {
  const { contextCartCount } = useContext(ContextCartCount);
  
  return (
    <div className="dsc-item">
      <img src={cartIcon} alt="Carrinho de compras" />
      {contextCartCount > 0 && (
        <div className="dsc-cart-count">{contextCartCount}</div>
      )}
    </div>
  );
}
