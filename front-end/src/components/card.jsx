import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Card({ product: { id, price, urlImage, name } }) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem('cartItens'));
    if (itens) {
      const prod = itens.find((e) => e.id === id);
      if (prod) {
        setQuantity(prod.quantity);
      }
    }
  }, [id]);

  const addProduct = () => {
    let cartItens = JSON.parse(localStorage.getItem('cartItens'));

    if (!cartItens) {
      cartItens = [];
    }
    if (cartItens.some((e) => e.id === id)) {
      const prod = cartItens.find((e) => e.id === id);
      prod.quantity += 1;
      setQuantity(prod.quantity);
    } else {
      setQuantity(1);
      cartItens.push({ id, price, urlImage, name, quantity: 1 });
    }
    localStorage.setItem('cartItens', JSON.stringify(cartItens));
  };

  const removeProduct = () => {
    let cartItens = JSON.parse(localStorage.getItem('cartItens'));

    if (!cartItens) {
      cartItens = [];
    }
    if (cartItens.some((e) => e.id === id)) {
      const prod = cartItens.find((e) => e.id === id);
      prod.quantity -= 1;
      setQuantity(prod.quantity);
      if (prod.quantity <= 0) {
        cartItens.splice(cartItens.indexOf(prod), 1);
      }
    }
    localStorage.setItem('cartItens', JSON.stringify(cartItens));
  };

  return (
    <div>
      <img
        src={ urlImage }
        alt="imagem retratando o produto"
      />
      <p>{name}</p>
      <h1>{price.replace('.', ',')}</h1>
      <button type="button" onClick={ removeProduct }>-</button>
      <input value={ quantity } />
      <button type="button" onClick={ addProduct }>+</button>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.obj,
}.isRequired;

export default Card;
