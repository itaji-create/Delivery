import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const handleClick = () => {
  localStorage.removeItem('user');

  window.location.href = '/login';
};

function NavBar({ products, cart, orders, titlePage, sellersOrders }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <div>
          <ul className="nav nav-pills">
            <li className="nav-item">
              {titlePage && (
                <h3
                  className="navbar-brand"
                  aria-current="page"
                >
                  { titlePage }
                </h3>
              )}
              {products && (
                <a
                  href="/customer/products"
                  className="nav-link active"
                  aria-current="page"
                >
                  { products }
                </a>
              )}
            </li>
            <li className="nav-item">
              {(orders && (
                <a
                  href="/customer/orders"
                  className="nav-link active"
                  aria-current="page"
                >
                  { orders }
                </a>))}
            </li>
            <li className="nav-item">
              {(sellersOrders && (
                <a
                  href="/seller/orders"
                  className="nav-link active"
                  aria-current="page"
                >
                  { sellersOrders }
                </a>))}
            </li>
            <li className="nav-item">
              {(cart && (
                <a
                  href="/customer/checkout"
                  className="nav-link active"
                  aria-current="page"
                >
                  { cart }
                </a>
              ))}
            </li>
          </ul>
        </div>
        <ul className="nav nav-pills">
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
      </nav>
      {/* <nav class="navbar navbar-expand-md navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">Página Inicial</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sobre Nós</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Serviços</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contato</a>
              </li>
            </ul>
          </div>
        </nav> */}
    </div>
  );
}

NavBar.propTypes = {
  products: PropTypes.str,
}.isRequired;

export default NavBar;
