// import Home from "./routes/Home";

import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <nav style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}>
        <Link to="/">Início</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/about">Sobre nós</Link>
      </nav>
    </>
  )
}

export default App
