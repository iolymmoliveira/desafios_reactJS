import "./styles.css";
import { Link } from "react-router-dom";
import * as authService from "../../services/auth-service";
import { useContext } from "react";
import { ContextToken } from "../../utils/context-token";

export default function LoggedUser() {

  const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

  function handleLogout() {
    authService.logout();
    setContextTokenPayload(undefined);
  }

  return (
    contextTokenPayload && authService.isAuthenticated()
    ?(
      <div className="dsc-logged-user">
        <p className="dsc-user-info">{contextTokenPayload.user_name}</p>
        <span className="dsc-logout" onClick={handleLogout}>Sair</span>
      </div>
    )
    :(
      <Link to="/login" className="dsc-login">Entrar</Link>
    )
  );
}