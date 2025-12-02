import type { ProductDTO } from "../../../models/product";
import "./style.css";

type Props = {
  product: ProductDTO;
}

export default function Listing({ product }: Props) {


  return (
    <li className="dsf-listing-item">
      <h3 className="dsf-listing-item-name">{product.name}</h3>
      <p className="dsf-listing-item-price">R$ {product.price.toFixed(2)}</p>
    </li>
  );
}