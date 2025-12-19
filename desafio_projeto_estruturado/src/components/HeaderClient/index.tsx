import { Link } from "react-router-dom";
import cartIcon from "../../assets/icons/cart.svg";
import adminIcon from "../../assets/icons/settings.svg";
import "./styles.css";
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";
import LoggedUser from "../LoggedUser";

export default function HeaderClient() {

  const { contextTokenPayload } = useContext(ContextToken);

  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-nav dsc-container flex-center-between">
          <Link to="/">
            <h1>DS Commerce</h1>
          </Link>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-icons">
              {contextTokenPayload &&
                authService.hasAnyRoles(["ROLE_ADMIN"]) && (
                  <Link to="/admin">
                    <div className="dsc-item">
                      <img src={adminIcon} alt="Admin" />
                    </div>
                  </Link>
                )
              }
              <Link to="/cart">
                <div className="dsc-item">
                  <img src={cartIcon} alt="Carrinho de compras" />
                </div>
              </Link>
            </div>
            <LoggedUser />
          </div>
        </nav>
      </header>
    </>
  );
}
