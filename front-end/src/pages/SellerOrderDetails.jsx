import React, { useEffect, useState } from 'react';
import { requestGet } from '../utils/requests';
import Card from '../components/customerOrderDetails';
import handleClick from '../utils/changeStatus';

function SellerOrderDetails() {
  const [order, setOrder] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    const id = window.location.href.split('orders/')[1];
    requestGet(`sales/${id}`).then((data) => setOrder(data));
    requestGet(`sales/products/${id}`).then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <Card products={ products } order={ order } />
      <button
        onClick={ () => handleClick(order.id, 'In Preparation') }
        type="button"
      >
        PREPARAR PEDIDO
      </button>
      <button
        onClick={ () => handleClick(order.id, 'In Transit') }
        type="button"
      >
        SAIU PARA ENTREGA
      </button>
    </section>
  );
}

export default SellerOrderDetails;
