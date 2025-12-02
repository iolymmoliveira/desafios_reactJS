import "./style.css";
import Filter from "../Filter";
import Listing from "../Listing";
import type { ProductDTO } from "../../../models/product";
import { findByPrice } from "../../../services/product-service";
import { useState, useEffect, useContext } from "react";
import { ContextCounterProduct } from "../../../utils/context-product";

type QueryParams = {
  minPrice: number;
  maxPrice: number;
};

export default function ListingBody() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  const {contextCountProducts, setContextCountProducts} = useContext(ContextCounterProduct);

  function handleFilter(min: number, max: number) {
    setProducts([]);
    setQueryParams({
      ...queryParams,
      minPrice: min,
      maxPrice: max,
    });
  }

  useEffect(() => {
    const newProducts = findByPrice(queryParams.minPrice, queryParams.maxPrice);
    setContextCountProducts(newProducts.length);
    setProducts(newProducts);
  }, [queryParams]);

  return (
    <div className="dsf-listing-body-container">
      <Filter onFilter={handleFilter} />
      { contextCountProducts === 0 ? (
        <div className="dsf-listing-body-warning">
          <h2>Nenhum produto encontrado.</h2>
        </div>
      ) : (
        <ul className="dsf-listing-body-items">
          {products.map((product) => (
            <Listing key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
