import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import Button from "../../../components/Button";
import CatalogCard from "../../../components/CatalogCard";
import * as productService from "../../../services/product-service";

export default function Catalog() {
  function handleNextPage() {
    console.log("Clicou no Carregar mais");
  }

  function handleSearch() {
    console.log("Realizou uma busca");
  }

  return (
    <main>
      <section id="dsc-catalog-section">
        <SearchBar onSearch={handleSearch} />
        <div className="dsc-catalog-list-container">
          {productService.findAll().map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <Button
          text="Carregar mais"
          onClick={handleNextPage}
          className="dsc-button-next-page"
        />
      </section>
    </main>
  );
}
