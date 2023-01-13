import React, { useEffect, useState } from 'react';
import { requestGet } from '../utils/requests';
import Card from '../components/saleDetailsCard';

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
      <button type="button">PREPARAR PEDIDO</button>
      <button type="button">SAIU PARA ENTREGA </button>
    </section>
  );
}

export default SellerOrderDetails;
