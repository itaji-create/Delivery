import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Card({ product: { price, urlImage, name } }) {
  return (
    <div>
      <img
        src={ urlImage }
        alt="imagem"
      />
      <p>{name}</p>
      <h1>{price.replace('.', ',')}</h1>
      <button type="button">-</button>
      <input type="text" value={ 0 } />
      <button type="button">+</button>
    </div>
  );
}
export default Card;
