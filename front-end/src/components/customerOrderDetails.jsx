import moment from 'moment';
import 'moment/locale/pt-br';

function Card(params) {
  const { order, products } = params;
  return (
    <div>
      <h3>Detalhe do Pedido</h3>
      {order ? (
        <table>
          <thead>
            <tr>
              <th>
                {`Pedido  00${order.id}`}
              </th>
              <th>P. Vend:</th>
              <th>
                { order.seller.name }
              </th>
              <th>
                { moment(order.saleDate).format('DD/MM/YYYY')}
                {/* { order.saleDate } */}
              </th>
              <th>
                { order.status }
              </th>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>
                Item
              </td>
              <td>Descrição</td>
              <td>
                Quantidade
              </td>
              <td>
                Valor Unitário
              </td>
              <td>
                Sub-total
              </td>
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
                  { order.products[i].price * e.quantity }
                </th>
              </tr>
            ))}
          </tbody>
          <p>
            Totallllll R$:
            <i>{ order.totalPrice.replace(/\./, ',') }</i>
          </p>
        </table>
      ) : null}
    </div>
  );
}

export default Card;
