import { NavLink } from "react-router-dom";
import "./style.css";

const categories = [
  { name: "Computadores", path: "/products/computers" },
  { name: "Eletrônicos", path: "/products/electronics" },
  { name: "Livros", path: "/products/books" },
];

export default function ProductCategory() {
  return (
    <>
      <div className="ds-product-category">
        <nav>
          <ul className="ds-list-category flex align-center">
            {categories.map((category) => (
              <li key={category.name} className="ds-item-category">
                <NavLink
                  to={category.path}
                  className={({ isActive }) =>
                    isActive ? "active" : "no-active"
                  }
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
