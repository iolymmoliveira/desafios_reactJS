import "./style.css";
import Filter from "../Filter";
import Listing from "../Listing";
import type { ProductDTO } from "../../../models/product";
import { findByPrice } from "../../../services/product-service";
import { useState, useEffect } from "react";

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
    setProducts(newProducts);
  }, [queryParams]);

  return (
    <div className="dsf-listing-body-container">
      <Filter onFilter={handleFilter} />
      { products.length === 0 ? (
        <h2>Nenhum produto encontrado</h2>
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
