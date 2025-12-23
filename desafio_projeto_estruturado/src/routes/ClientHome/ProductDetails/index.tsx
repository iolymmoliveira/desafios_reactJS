import "./styles.css";
import Button from "../../../components/Button";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {

  const params = useParams();
  const product = productService.findById(Number(params.productId));

  return (
    <main>
      <section id="dsc-product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-button-container">
          <Button text="Comprar" variant="primary" />
          <Link to="/">
            <Button text="Início" variant="secondary" />
          </Link>
        </div>
      </section>
    </main>
  );
}
