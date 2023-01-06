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
      {user ? (
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          onClick={ () => navigate('/customer/products') }
        >
          { user.name }
        </button>
      ) : (
        null
      )}
      <button
        type="button"
        onClick={ handleClick }
      >
        Sair
      </button>
    </nav>
  );
}
export default NavBar;
