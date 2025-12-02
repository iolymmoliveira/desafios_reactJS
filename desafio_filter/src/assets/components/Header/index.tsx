import { useContext } from 'react';
import './style.css';
import { ContextCounterProduct } from '../../../utils/context-product';

export default function Header() {

  const {contextCountProducts} = useContext(ContextCounterProduct);

  return (
      <nav className="dsf-header-container">
        <h1>DSFilter</h1>
        {contextCountProducts > 0 && (
          <div className="dsf-header-quantity">
            {contextCountProducts} produto(s)
          </div>
        )}
      </nav>
  );
}