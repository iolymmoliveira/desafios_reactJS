import './style.css';
import Button from '../../components/Button';

export default function Search() {
  return (
    <div id="dsgh-search" className="dsgh-search-container">
      <h1 className="dsgh-search-title">Encontre um perfil</h1>
      <input type="text" className="dsgh-search-input" placeholder="Usuário Github" />
      <Button textButton="Encontrar" />
    </div>
  );
}