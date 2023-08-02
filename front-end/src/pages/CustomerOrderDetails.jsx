import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import { requestGet } from '../utils/requests';
import Card from '../components/customerOrderDetails';
import handleClick from '../utils/changeStatus';

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
      <Card
        products={ products }
        order={ order }
        handleClick={ () => handleClick(order.id, 'Entregue') }
        buttonName="Mark as delivered"
        disabled={ order && order.status === 'Pendente' }
      />
    </section>
  );
}

export default SaleDetails;
