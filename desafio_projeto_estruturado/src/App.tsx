import "./index.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ClientHome from "./routes/ClientHome"
import Login from "./routes/ClientHome/Login"
import AdminHome from "./routes/Admin/AdminHome"
import Admin from "./routes/Admin"

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<ClientHome />} >
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/admin/" element={<Admin />}>
          <Route index element={<AdminHome />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
