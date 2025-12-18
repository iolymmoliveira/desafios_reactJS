import "./index.css"
import { Navigate, Route, Routes } from "react-router-dom"
import ClientHome from "./routes/ClientHome"
import Login from "./routes/ClientHome/Login"
import AdminHome from "./routes/Admin/AdminHome"
import Admin from "./routes/Admin"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { history } from "./utils/history";

function App() {

  return (
    <HistoryRouter history={history}>    
      <Routes>
        <Route path="/" element={<ClientHome />} >
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/admin/" element={<Admin />}>
          <Route index element={<AdminHome />} />

        </Route>
      </Routes>
    </HistoryRouter>
  )
}

export default App
