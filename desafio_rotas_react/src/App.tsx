import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Books from "./routes/Products/Books";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import PageContent from "./routes/HomeContent";

const textLeft = "Não";
const textRight = "encontrado!";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<PageContent title="Bem Vindos!!!" />} />
            <Route path="about" element={<About />} />

            <Route path="products" element={<Products />}>
              <Route path="books" element={<Books />} />
              <Route path="computers" element={<Computers />} />
              <Route path="electronics" element={<Electronics />} />
            </Route>

            <Route
              path="*"
              element={
                <NotFound
                  url={
                    "https://cdn.svgator.com/images/2024/04/cat-revenge-animation-404-page.gif"
                  }
                  textLeft={textLeft}
                  textRight={textRight}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
