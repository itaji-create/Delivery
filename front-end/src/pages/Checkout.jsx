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
    <section>
      <NavBar />
      <h2>Finalizar Pedido</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidadade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={ product.id } id={ product.id }>
              <td>
                {index + 1}
              </td>
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
    </section>
  );
}

export default Checkout;
