import './style.css';

export default function Header() {
  return (
      <nav className="ds-header-container">
        <h1>DSFilter</h1>
        <div className="ds-header-quantity">
          produto(s)
        </div>
      </nav>
  );
}