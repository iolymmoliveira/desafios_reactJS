import "./index.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ClientHome from "./routes/ClientHome"
import Login from "./routes/ClientHome/Login"

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<ClientHome />} >
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
