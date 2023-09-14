import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const handleClick = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.removeItem('cartItens');
};

function NavBar({ products, cart, orders, titlePage, sellersOrders, search }) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="nav nav-pills">
          <li className="nav-item">
            {titlePage && (
              <h3
                className="navbar-name"
                aria-current="page"
              >
                { titlePage }
              </h3>
            )}
            {products && (
              <a
                href="/customer/products"
                className="navbar-link"
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
                className="navbar-link"
                aria-current="page"
              >
                { orders }
              </a>))}
          </li>
          <li className="nav-item">
            {(sellersOrders && (
              <a
                href="/seller/orders"
                className="navbar-link"
                aria-current="page"
              >
                { sellersOrders }
              </a>))}
          </li>
          <li className="nav-item active">
            {(cart && (
              <a
                href="/customer/checkout"
                className="navbar-link"
                aria-current="page"
              >
                { cart }
              </a>
            ))}
          </li>
        </ul>
      </div>
      {(search && (
        <ul className="nav nav-pills">
          <li>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </li>
          <li>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </li>
        </ul>
      ))}
      <ul className="nav nav-pills">
        <li className="nav-item">
          <span className="navbar-name">
            { user && user.name }
          </span>
        </li>
        <li className="nav-item">
          <a
            href="/login"
            onClick={ handleClick }
            className="navbar-link"
          >
            Sair
          </a>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  products: PropTypes.str,
}.isRequired;

export default NavBar;
