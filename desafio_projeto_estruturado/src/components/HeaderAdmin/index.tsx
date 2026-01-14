import "./styles.css";
import { Link, NavLink } from "react-router-dom";
import productsIcon from "../../assets/icons/products.svg";
import homeIcon from "../../assets/icons/home.svg";
import LoggedUser from "../LoggedUser";

export default function HeaderAdmin() {
  return (
    <>
      <header className="dsc-header-admin">
        <nav className="dsc-nav dsc-container flex-center-between">
          <Link to="/">
            <h1>DS Commerce</h1>
          </Link>
          <div className="dsc-navbar-right-admin">
            <div className="dsc-menu-items-icons-admin">
              <NavLink
                to="/admin/home"
                className={({ isActive }) =>
                  isActive
                    ? "dsc-menu-nav-link dsc-menu-nav-link-active"
                    : "dsc-menu-nav-link"
                }
              >
                <div className="dsc-item-admin">
                  <img src={homeIcon} alt="Início" />
                  <p>Início</p>
                </div>
              </NavLink>
              <NavLink
                to="/admin/products"
                className={({ isActive }) =>
                  isActive
                    ? "dsc-menu-nav-link dsc-menu-nav-link-active"
                    : "dsc-menu-nav-link"
                }
              >
                <div className="dsc-item-admin">
                  <img src={productsIcon} alt="Cadastro de Produtos" />
                  <p>Produtos</p>
                </div>
              </NavLink>
            </div>
            <LoggedUser />
          </div>
        </nav>
      </header>
    </>
  );
}
