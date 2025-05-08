import { NavLink, useNavigate } from "react-router-dom";
import "./style.css";

type Props = {
  content_menu: {
    label: string;
    href: string;
  }[];
  icon: {
    src: string;
    alt: string;
    href: string;
  };
};

export default function Header({ content_menu, icon }: Props) {
  const navigate = useNavigate();

  return (
    <>
      <header id="ds-header">
        <div className="ds-container-header flex">
          <div className="ds-menu-left flex align-center">
            {content_menu.map((item, index) => {
              return (
                <nav key={index}>
                  <NavLink to={`/${item.href}`}>{item.label}</NavLink>
                </nav>
              );
            })}
          </div>
          <div className="ds-menu-right">
            <nav>
              <img
                src={icon.src}
                alt={icon.alt}
                className="ds-menu-right-img"
                onClick={() => {
                  navigate(icon.href);
                }}
              />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
