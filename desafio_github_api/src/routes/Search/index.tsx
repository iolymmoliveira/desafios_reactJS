import "./style.css";
import Button from "../../components/Button";
import { useState } from "react";
import axios from "axios";
import type { userDTO } from "../../models/userDTO";

type InputName = {
  name: string;
};

export default function Search() {
  const [inputName, setInputName] = useState<InputName>({ name: "" });
  const [userData, setUserData] = useState<userDTO>();
  const [error, setError] = useState<string>();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputName({ name: event.target.value });
    setError(undefined);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  }

  function handleSearch() {
    if (!inputName) return;

    axios
      .get(`https://api.github.com/users/${inputName.name}`)
      .then((response) => {
        setUserData(response.data);
        setError(undefined);
      })
      .catch(() => {
        setUserData(undefined);
        setError("Erro ao buscar usuário");
      });
  }

  return (
    <>
      <div className="dsgh-search-container dsgh-search">
        <h1 className="dsgh-search-title">Encontre um perfil Github</h1>
        <input
          id="username"
          type="text"
          className="dsgh-search-input"
          placeholder="Usuário Github"
          value={inputName.name}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <Button textButton="Encontrar" onClick={handleSearch} />
      </div>
      <div className="dsgh-user-container">
        {userData && (
          <div className="dsgh-user-info">
            <div className="dsgh-user-img">
              <img src={userData.avatar_url} alt="Avatar" width={80} />
            </div>
            <div className="dsgh-user-data">
              <h3>Informações</h3>
              <p className="dsgh-data-row">
                <span className="dsgh-data-row-title">Perfil: </span>
                <a
                  href={userData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dsgh-data-row-link"
                >
                  {userData.url}
                </a>
              </p>
              <p className="dsgh-data-row"><span className="dsgh-data-row-title">Seguidores: </span>{userData.followers}</p>
              <p className="dsgh-data-row"><span className="dsgh-data-row-title">Localidade: </span>{userData.location}</p>
              <p className="dsgh-data-row"><span className="dsgh-data-row-title">Nome: </span>{userData.name}</p>
            </div>
          </div>
        )}
      </div>
      {error && <div className="dsgh-error-message">{error}</div>}
    </>
  );
}
