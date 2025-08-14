import './style.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { textButton } from "../../utils/data";

interface HomeBodyProps {
  title?: string;
  description?: string;
}

export default function HomeBody({ title, description }: HomeBodyProps) {
  return (
    <>
      <div id="dsgh-home-body" className="dsgh-home-body-container">
        <div className="dsgh-header-container">
          <h1>{ title } </h1>
          <p>{ description }</p>
        </div>
        <div className="dsgh-button-wrapper">
          <Link to="/search" >
            <Button textButton={ textButton } />
          </Link>
        </div>
      </div>
    </>
  )
}