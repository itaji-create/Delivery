import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';
import { useNavigate } from 'react-router-dom';

function Order({ order: { id, status, saleDate, totalPrice } }) {
  const navigate = useNavigate();

  const handleOrders = () => {
    navigate(`/customer/orders/${id}`);
  };

  return (
    <button type="button" onClick={ handleOrders }>
      <p>
        { id }
      </p>
      <p>
        { status }
      </p>
      <p>
        { moment(saleDate).locale('pt-br').format('L') }
      </p>
      <p>
        <i>R$</i>
        { Math.abs(totalPrice).toFixed(2).toString().replace('.', ',') }
      </p>
    </button>
  );
}

Order.propTypes = {
  order: PropTypes.obj,
}.isRequired;

export default Order;
