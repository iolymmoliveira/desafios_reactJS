import { Link } from 'react-router-dom';
import './style.css';

interface NavBarProps {
  title?: string;
}

export default function NavBar({ title }: NavBarProps) {


  return (
    <>
      <nav id="dsgh-navbar" className="pd-15">
        <Link to="/" className="dsgh-link">
          <h1 className="dsgh-title">{ title }</h1>
        </Link>
      </nav>
    </>
  );

}