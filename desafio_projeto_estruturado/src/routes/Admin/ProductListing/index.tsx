import "./styles.css";
import editIcon from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import Button from "../../../components/Button";
import SearchBar from "../../../components/SearchBar";
import * as productService from "../../../services/product-service";
import { useEffect, useState } from "react";
import type { ProductDTO } from "../../../models/product";
import DialogInfo from "../../../components/DialogInfo";
import DialogConfirmation from "../../../components/DialogConfirmation";

type QueryParams = {
  page: number;
  name: string;
};

export default function ProductListing() {
  const [isLastPage, setIsLastPage] = useState(false);
  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: 0,
    name: "",
  });
  const [dialogInfoData, setDialogInfoData] = useState({
    visible: false,
    message: "Operação com sucesso!",
  });
  const [dialogConfirmationData, setDialogConfirmationData] = useState({
    visible: false,
    id: 0,
    message: "Tem certeza?",
  });

  useEffect(() => {
    productService
      .findPageRequest(queryParams.page, queryParams.name)
      .then((response) => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      });
  }, [queryParams]);

  function handleSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPageClick() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 });
  }

  function handleDialogInfoClose() {
    setDialogInfoData({ ...dialogInfoData, visible: false });
  }

  function handleDeleteClick(productId: number) {
    setDialogConfirmationData({
      ...dialogConfirmationData,
      visible: true,
      id: productId,
    });
  }

  function handleDialogConfirmationAnswer(answer: boolean, productId: number) {
    if (answer) {
      productService
        .deleteById(productId)
        .then(() => {
          setProducts([]);
          setQueryParams({ ...queryParams, page: 0 });
        })
        .catch((error) => {
          setDialogInfoData({
            visible: true,
            message: error.response.data.error,
          });
        });
    }

    setDialogConfirmationData({ ...dialogConfirmationData, visible: false });
  }

  return (
    <main>
      <section id="dsc-product-listing-section" className="dsc-container">
        <h2 className="dsc-listing-title">Cadastro de produtos</h2>

        <Button
          text="Novo"
          variant="secondary"
          className="dsc-button-new-product"
        />

        <SearchBar onSearch={handleSearch} />

        <table className="dsc-table">
          <thead>
            <tr>
              <th className="dsc-tb576">ID</th>
              <th></th>
              <th className="dsc-tb768">Preço</th>
              <th className="dsc-txt-left">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="dsc-tb576">{product.id}</td>
                <td>
                  <img
                    className="dsc-product-listing-image"
                    src={product.imgUrl}
                    alt={product.name}
                  />
                </td>
                <td className="dsc-tb768">R$ {product.price.toFixed(2)}</td>
                <td className="dsc-txt-left">{product.name}</td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={editIcon}
                    alt="Editar"
                  />
                </td>
                <td>
                  <img
                    className="dsc-product-listing-btn"
                    src={deleteIcon}
                    alt="Deletar"
                    onClick={() => handleDeleteClick(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {!isLastPage && (
          <Button
            className="dsc-button-next-page"
            text="Carregar mais"
            onClick={handleNextPageClick}
          />
        )}
      </section>
      {dialogInfoData.visible && (
        <DialogInfo
          message={dialogInfoData.message}
          onDialogClose={handleDialogInfoClose}
        />
      )}
      {dialogConfirmationData.visible && (
        <DialogConfirmation
          message={dialogConfirmationData.message}
          id={dialogConfirmationData.id}
          onDialogAnswer={handleDialogConfirmationAnswer}
        />
      )}
    </main>
  );
}
