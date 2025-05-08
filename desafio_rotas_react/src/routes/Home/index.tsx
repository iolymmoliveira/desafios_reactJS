// import PageContent from "../PageContent";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";


const menuItems = [
  { label: "Início", href: "home" },
  { label: "Produtos", href: "products" },
  { label: "Sobre nós", href: "about" },
];

const icon = {
  src: "../src/assets/home.svg",
  alt: "Icon Home",
  href: "/home",
};

export default function Home() {

  return (
    <>
      <Header content_menu={menuItems} icon={icon} />
      <Outlet />
    </>
  )
}