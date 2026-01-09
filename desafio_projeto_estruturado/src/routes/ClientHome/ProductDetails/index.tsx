import "./styles.css";
import Button from "../../../components/Button";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import * as cartService from "../../../services/cart-service";
import { ContextCartCount } from "../../../utils/context-cart";

export default function ProductDetails() {
  const params = useParams();
  const [product, setProduct] = useState<ProductDTO>();
  const navigate = useNavigate();
  const { setContextCartCount } = useContext(ContextCartCount);

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/");
      })
  }, []);

  function handleByClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/Cart");
    }
  }

  return (
    <main>
      <section id="dsc-product-details-section" className="dsc-container">
        {
          product && 
          <ProductDetailsCard product={product} />
        }
        <div className="dsc-button-container">
          <Button text="Comprar" variant="primary" onClick={handleByClick} />
          <Link to="/">
            <Button text="Início" variant="secondary" />
          </Link>
        </div>
      </section>
    </main>
  );
}
