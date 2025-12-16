import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ClientHome from "./routes/ClientHome"

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<ClientHome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
