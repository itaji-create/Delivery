import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import { requestGet, updateSale } from '../utils/requests';
import Card from '../components/customerOrderDetails';

function SaleDetails() {
  const [order, setOrder] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    const id = window.location.href.split('orders/')[1];
    requestGet(`sales/${id}`).then((data) => setOrder(data));
    requestGet(`sales/products/${id}`).then((data) => setProducts(data));
  }, []);

  const handleClick = async (id) => {
    await updateSale(`/sales/${id}`, { status: 'Entregue' });
    window.location.href = `/customer/orders/${id}`;
  };

  return (
    <section>
      <NavBar />
      <Card
        products={ products }
        order={ order }
        handleClick={ () => handleClick(order.id) }
      />
    </section>
  );
}

export default SaleDetails;
