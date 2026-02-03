import "./styles.css";
import type { ProductDTO } from "../../models/product";
import ProductCategory from "../ProductCategory";
import imagePlaceholder from "../../assets/images/placeholder.png";

type Props = {
  product: ProductDTO,
}

export default function ProductDetailsCard({ product } : Props) {
  return (
    <>
      <div className="dsc-card">
        <div className="dsc-card-top">
          <img src={product.imgUrl || imagePlaceholder} alt={product.name} />
        </div>
        <div className="dsc-card-bottom">
          <h3>R$ {product.price.toFixed(2)}</h3>
          <h4>{product.name}</h4>
          <p>{product.description}</p>
          <div className="dsc-category-container">
            {
              product.categories.map(
                item => (
                  <ProductCategory key={item.id} name={item.name} />
                )
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}
