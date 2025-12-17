import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import productsIcon from "../../assets/icons/products.svg";
import homeIcon from "../../assets/icons/home.svg";

export default function HeaderAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const userName = "Maria Silva";

  function handleLogout() {
    setIsAuthenticated(false);
  }

  return (
    <>
      <header className="dsc-header-admin">
        <nav className="dsc-nav dsc-container flex-center-between">
          <Link to="/">
            <h1>DS Commerce</h1>
          </Link>
          <div className="dsc-navbar-right">
            {isAuthenticated && (
              <div className="dsc-menu-items-icons-admin">
                <div className="dsc-item-admin">
                  <img src={homeIcon} alt="Início" />
                  <p>Início</p>
                </div>
                <div className="dsc-item-admin">
                  <img src={productsIcon} alt="Cadastro de Produtos" />
                  <p>Produtos</p>
                </div>
              </div>
            )}
            {isAuthenticated ? (
              <div className="dsc-menu-items-info">
                <div className="dsc-item-user">{userName}</div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="dsc-logout-button"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link to="/login">Entrar</Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}
