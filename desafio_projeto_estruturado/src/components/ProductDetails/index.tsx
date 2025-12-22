import "./styles.css";
import computer from "../../assets/images/computer.png";

export default function ProductDetails() {
  return (
    <section id="dsc-product-details" className="dsc-container">
      <div className="dsc-card">
        <div className="dsc-card-top">
          <img src={computer} alt="Computer" />
        </div>
        <div className="dsc-card-bottom">
          <h3>R$ 5.000,00</h3>
          <h4>Nome do Produto</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At odit
            rerum accusamus veniam voluptatibus nulla praesentium accusantium
            odio blanditiis pariatur, impedit assumenda modi quisquam temporibus
            mollitia, debitis necessitatibus aut officiis!
          </p>
          <div className="dsc-category-container">
            <div className="dsc-category">Eletrônicos</div>
            <div className="dsc-category">Computadores</div>
          </div>
        </div>
      </div>
      <div className="dsc-button-container">
        <div className="dsc-button dsc-button-primary">Comprar</div>
        <div className="dsc-button dsc-button-secondary">Início</div>
      </div>
    </section>
  );
}
