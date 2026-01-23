import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import Button from "../../../components/Button";
import CatalogCard from "../../../components/CatalogCard";
import * as productService from "../../../services/product-service";
import type { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";

type QueryParams = {
  page: number,
  name: string,
}

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    productService.findPageRequest(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams])

  function handleNextPageClick() {
    setQueryParams({...queryParams, page: queryParams.page + 1});
  }

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({...queryParams, page: 0, name: searchText});
  }

  return (
    <main>
      <section id="dsc-catalog-section">
        <SearchBar onSearch={handleSearch} />
        <div className="dsc-catalog-list-container">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        {
          !isLastPage &&
          <Button
            text="Carregar mais"
            onClick={handleNextPageClick}
            className="dsc-button-next-page"
          />
        }
      </section>
    </main>
  );
}
