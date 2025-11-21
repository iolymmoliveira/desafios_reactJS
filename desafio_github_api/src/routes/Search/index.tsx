import './style.css';
import Button from '../../components/Button';
import { useState } from 'react';
import axios from 'axios';
import type { userDTO } from '../../models/userDTO';


type InputName = {
  name: string;
}

export default function Search() {

  const [inputName, setInputName] = useState<InputName>({name: ""});
  const [userData, setUserData] = useState<userDTO>();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputName({name: event.target.value});
  }

  function handleSearch() {
    if (!inputName) return;

    axios.get(`https://api.github.com/users/${inputName.name}`)
    .then(response => {
      console.log(response.data);
      setUserData(response.data);
    })
    .catch(error => {
      setUserData(undefined);
      console.error('Error searching user:', error);
    });
  };


  return (
    <>
      <div id="dsgh-search" className="dsgh-search-container">
        <h1 className="dsgh-search-title">Encontre um perfil</h1>
        <input type="text" className="dsgh-search-input" placeholder="Usuário Github" value={inputName.name} onChange={handleInputChange} />
        <Button textButton="Encontrar" onClick={handleSearch} />
      </div>
      <div>
        {userData && (
          <div className="dsgh-user-info">
            <div className="dsgh-user-img">
              <img src={userData.avatar_url} alt="Avatar" width={80} />
            </div>  
            <div className="dsgh-user-data">
              <h3>Informações</h3>
              <p>Perfil: {userData.url}</p>
              <p>Seguidores: {userData.followers}</p>
              <p>Localidade: {userData.location}</p>
              <p>Nome: {userData.name}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}