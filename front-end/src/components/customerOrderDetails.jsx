import moment from 'moment';
import 'moment/locale/pt-br';

function Card(params) {
  const { order, products, handleClick, buttonName, disabled } = params;

  return (
    <div>
      {order ? (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand">{`Order  #00${order.id}`}</p>
            <p className="navbar-brand">Seller:</p>
            <p className="navbar-brand">{ order.seller.name }</p>
            <p className="navbar-brand">{ moment(order.saleDate).format('MM/DD/YYYY')}</p>
            <p className="navbar-brand">{ order.status }</p>
            <button
              type="button"
              className="btn btn-success rounded-pill px-3"
              disabled={ disabled }
              onClick={ handleClick }
            >
              { buttonName }
            </button>
          </nav>
          <table className="table">
            <thead>
              <tr>
                <th>
                  Item
                </th>
                <th>Descrição</th>
                <th>
                  Quantidade
                </th>
                <th>
                  Valor Unitário
                </th>
                <th>
                  Sub-total
                </th>
              </tr>
            </thead>
            <tbody>
              {products && products.map((e, i) => (
                <tr key={ i }>
                  <th>
                    { i + 1 }
                  </th>
                  <td>
                    { order.products[i].name }
                  </td>
                  <th>
                    { e.quantity }
                  </th>
                  <th>{ order.products[i].price }</th>
                  <th>
                    { (order.products[i].price * e.quantity).toFixed(2) }
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="title" style={ { textAlign: 'end' } }>
            {
              `Total: R$ ${(order.totalPrice).replace('.', ',')}`
            }
          </h3>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
