// import PageContent from "../HomeContent"
import { Outlet } from "react-router-dom"
import ProductCategory from "./ProductCategory"

export default function Products() {
  return (
    <>
      <ProductCategory />
      {/* <PageContent title="Bem-vindos! - Produtos!!!"/> */}
      <Outlet />
    </>
  )
}