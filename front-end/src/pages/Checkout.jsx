/* eslint-disable react/jsx-max-depth */
import React, { useEffect, useState } from 'react';
import Forms from '../components/formsCheckout';
import NavBar from '../components/navBar';

function Checkout() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem('cartItens'));
    if (cartProducts) {
      setCart(cartProducts);
    }
  }, []);

  const handleRemoveButton = ({ target }) => {
    const cartProducts = JSON.parse(localStorage.getItem('cartItens'))
      .filter((e) => e.name !== cart[target.id].name);
    localStorage.setItem('cartItens', JSON.stringify(cartProducts));

    setCart(cartProducts);
  };
  const subTotal = (quantity, price) => (quantity * price)
    .toFixed(2);

  const totalPrice = cart
    .reduce((prev, curr) => prev + Number(subTotal(curr.quantity, curr.price)), 0);

  return (
    <div>
      <NavBar products="Products" orders="My orders" />
      <div id="checkout-content">
        <div className="col-md-7 col-lg-8">
          <h2>Finalizar Pedido</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Descrição</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Valor Unitário</th>
              <th scope="col">Sub-total</th>
              <th scope="col">Remover Item</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, index) => (
              <tr key={ product.id } id={ product.id }>
                <th scope="row">
                  {index + 1}
                </th>
                <td>
                  {product.name}
                </td>
                <td>
                  {product.quantity}
                </td>
                <td>
                  {product.price.replace('.', ',')}
                </td>
                <td>
                  { subTotal(product.quantity, product.price).replace('.', ',') }
                </td>
                <td>
                  <button
                    type="button"
                    onClick={ handleRemoveButton }
                    id={ index }
                    className="btn btn-danger"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>
          {
            `Total: R$ ${(totalPrice).toFixed(2).replace('.', ',')}`
          }

        </h3>
        <Forms total={ totalPrice } cart={ cart } />
      </div>
    </div>
  );
}

export default Checkout;
