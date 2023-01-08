import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createSale, requestGet } from '../utils/requests';

function Forms(props) {
  const { total, cart } = props;
  const navigate = useNavigate();
  const [adress, setAdress] = useState('');
  const [number, setNumber] = useState('');
  const [sellers, setSellers] = useState(false);

  useEffect(() => {
    requestGet('/user/sellers').then((data) => setSellers(data));
  }, []);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = async () => {
    const select = document.getElementById('vendedor');
    const { value } = select.options[select.selectedIndex];

    const data = {
      userId: user.id,
      sellerId: Number(value),
      totalPrice: total,
      deliveryAddress: adress,
      deliveryNumber: number,
    };
    const sale = await createSale('/sales', data, user.token);

    cart.forEach((e) => {
      e.saleId = sale.id;
    });

    await createSale('/sales/products', cart, user.token);

    navigate(`/customer/orders/${sale.id}`);
  };
  return (
    <div>
      <div>
        <label htmlFor="vendedor">
          P.Vendedora Responsável
          <select
            name="vendedor"
            id="vendedor"
            onClick={ (e) => console.log(e.target.value) }
          >
            {sellers && sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>{ seller.name }</option>
            ))}
          </select>
        </label>
        <label htmlFor="endereço">
          Endereço
          <input
            type="text"
            onChange={ (e) => setAdress(e.target.value) }
          />
        </label>
        <label htmlFor="endereço">
          Número
          <input
            type="text"
            onChange={ (e) => setNumber(e.target.value) }
          />
        </label>
        <button
          type="submit"
          onClick={ handleSubmit }
        >
          Finalizar pedido
        </button>
      </div>
    </div>
  );
}

Forms.propTypes = {
  total: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    qtd: PropTypes.number,
    totalPrice: PropTypes.number,
  }).isRequired,
};

export default Forms;
