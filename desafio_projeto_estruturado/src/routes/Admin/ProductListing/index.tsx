import "./styles.css";
import editIcon from "../../../assets/icons/edit.svg";
import deleteIcon from "../../../assets/icons/delete.svg";
import computerImg from "../../../assets/images/computer.png";
import Button from "../../../components/Button";
import SearchBar from "../../../components/SearchBar";

export default function ProductListing() {

  function handleSearch() {
    console.log("Clicou no Pesquisar");
  }

  return (
    <main>
      <section id="dsc-product-listing-section" className="dsc-container">
        <h2 className="dsc-listing-title">Cadastro de produtos</h2>

        <Button text="Novo" variant="secondary" className="dsc-button-new-product" />

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
            <tr>
              <td className="dsc-tb576">341</td>
              <td><img className="dsc-product-listing-image" src={computerImg} alt="Computer" /></td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
              <td><img className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td><img className="dsc-product-listing-image" src={computerImg} alt="Computer" /></td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
              <td><img className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
            </tr>
            <tr>
              <td className="dsc-tb576">341</td>
              <td><img className="dsc-product-listing-image" src={computerImg} alt="Computer" /></td>
              <td className="dsc-tb768">R$ 5000,00</td>
              <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
              <td><img className="dsc-product-listing-btn" src={editIcon} alt="Editar" /></td>
              <td><img className="dsc-product-listing-btn" src={deleteIcon} alt="Deletar" /></td>
            </tr>
          </tbody>
        </table>

        <Button className="dsc-button-next-page" text="Carregar mais"/>
      </section>
    </main>
  );
}