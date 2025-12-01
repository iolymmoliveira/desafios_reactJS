import './style.css';

export default function Header() {
  return (
      <nav className="dsf-header-container">
        <h1>DSFilter</h1>
        <div className="dsf-header-quantity">
          produto(s)
        </div>
      </nav>
  );
}