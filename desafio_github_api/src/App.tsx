import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeBodyProps } from "./utils/data";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Profiles from "./routes/Profiles";
import HomeBody from "./routes/HomeBody";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route
              index
              element={
                <HomeBody
                  title={HomeBodyProps.title}
                  description={HomeBodyProps.description}
                />
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
