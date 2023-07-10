import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const handleClick = () => {
  localStorage.removeItem('user');

  window.location.href = '/login';
};

function NavBar() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  return (
    <Container>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a
              href="/customer/products"
              className="nav-link active"
              aria-current="page"
            >
              Produtos
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/customer/orders"
              className="nav-link"
              aria-current="page"
            >
              Meus pedidos
            </a>
          </li>
          <li>
            <span>
              { user && user.name }
            </span>
            <Button
              type="button"
              onClick={ handleClick }
            >
              Sair
            </Button>
          </li>
        </ul>
      </header>
    </Container>
  );
}
export default NavBar;
