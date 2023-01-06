import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    price,
    image,
    name,
    quantity,
  } = props;

  return (
    <div>
      <h1>{price.replace('.', ',')}</h1>
      <img
        src={ image }
        alt="imagem"
      />
      <p>{name}</p>
      <button type="button">-</button>
      <input type="text" value={ quantity } />
      <button type="button">+</button>
    </div>
  );
}
export default Card;

Card.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
