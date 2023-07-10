import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';

function Order({ order: { id, status, saleDate, totalPrice }, role }) {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{`Pedido #0${id}`}</h5>
          <p className="card-text">
            {`Data: ${moment(saleDate).locale('pt-br').format('L')}`}
          </p>
          <p className="bg-primary text-white p-3">{ status }</p>
          <p className="card-text">
            {`Preço: R$ ${Math.abs(totalPrice).toFixed(2).toString().replace('.', ',')}`}
          </p>
          <a href={ `/${role}/orders/${id}` } className="btn btn-primary">Detalhes</a>
        </div>
      </div>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.obj,
}.isRequired;

export default Order;
