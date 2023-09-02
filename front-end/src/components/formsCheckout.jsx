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
    console.log(data);
    const sale = await createSale('/sales', data, user.token);

    cart.forEach((e) => {
      e.saleId = sale.id;
    });

    await createSale('/sales/products', cart, user.token);

    navigate(`/customer/orders/${sale.id}`);
  };
  return (
    <div>
      <form className="needs-validation was-validated" noValidate>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="address" className="form-label">
              Address
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder
                required
                onChange={ (e) => setAdress(e.target.value) }
              />
              <div className="invalid-feedback">
                Valid address is required.
              </div>
            </label>
          </div>
          <div className="col-sm-6">
            <label htmlFor="number-address" className="form-label">
              Number
              <input
                type="number"
                className="form-control"
                id="number-address"
                placeholder
                required
                onChange={ (e) => setNumber(e.target.value) }
              />
              <div className="invalid-feedback">
                Valid number is required.
              </div>
            </label>
          </div>
          <div className="col-md-5">
            <label htmlFor="vendedor" className="form-label">
              Responsible seller:
              <select
                className="form-select"
                required
                name="vendedor"
                id="vendedor"
                defaultValue={ 1 }
              >
              {sellers && sellers.map((seller) => (
                <option key={ seller.id } value={ seller.id }>{ seller.name }</option>
              ))}
              </select>
            </label>
          </div>
          <div>
            <button
              type="button"
              onClick={ handleSubmit }
              className="w-100 btn btn-primary btn-lg"
            >
              Finalizar pedido
            </button>
          </div>
        </div>
      </form>
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
