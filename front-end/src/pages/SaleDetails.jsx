import React, { useEffect, useState } from 'react';
import moment from 'moment';
import NavBar from '../components/navBar';
import 'moment/locale/pt-br';
import { requestGet } from '../utils/requests';

function SaleDetails() {
  const [order, setOrder] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    const id = window.location.href.split('orders/')[1];
    requestGet(`sales/${id}`).then((data) => setOrder(data));
    requestGet(`sales/products/${id}`).then((data) => setProducts(data));
  }, []);

  console.log(order);
  return (
    <section>
      <NavBar />
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
              </th>
              <th>
                { order.status }
              </th>
              <button
                type="button"
                disabled
              >
                entregue
              </button>
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
            Total R$:
            <i>{ order.totalPrice.replace(/\./, ',') }</i>
          </p>
        </table>
      ) : null}
    </section>
  );
}

export default SaleDetails;
