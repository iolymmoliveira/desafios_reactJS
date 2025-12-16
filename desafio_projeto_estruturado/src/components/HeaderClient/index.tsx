import { Link } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import "./styles.css";
import { useState } from "react";

export default function HeaderClient() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const userName = "Maria Silva";

  function handleLogout() {
    setIsAuthenticated(false);
  }

  return (
    <>
      <header className="dsc-header">
        <nav className="dsc-nav dsc-container flex-center-between">
          <Link to="/">
            <h1>DS Commerce</h1>
          </Link>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-icons">
              {isAuthenticated && (
                <div className="dsc-item">
                  <img src={settingsIcon} alt="Configurações" />
                </div>
              )}
              <div className="dsc-item">
                <img src={cartIcon} alt="Carrinho de compras" />
              </div>
            </div>
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
