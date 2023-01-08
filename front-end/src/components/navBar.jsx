import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const handleClick = () => {
  localStorage.removeItem('user');

  window.location.href = '/login';
};

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  return (
    <nav>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => navigate('/customer/products') }
        >
          Produtos
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => navigate('/customer/orders') }
        >
          Meus pedidos
        </button>
      </div>
      <div>
        <span>
          { user && user.name }
        </span>
        <button
          type="button"
          onClick={ handleClick }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
