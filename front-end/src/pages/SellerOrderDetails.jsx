import React, { useEffect, useState } from 'react';
import { requestGet } from '../utils/requests';
import Card from '../components/customerOrderDetails';
import handleClick from '../utils/changeStatus';
import NavBar from '../components/navBar';

function SellerOrderDetails() {
  const [order, setOrder] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    const id = window.location.href.split('orders/')[1];
    requestGet(`sales/${id}`).then((data) => setOrder(data));
    requestGet(`sales/products/${id}`).then((data) => setProducts(data));
  }, []);

  const switchButton = (status) => {
    if (status === 'Pendente') {
      handleClick(order.id, 'In Preparation');
    }
    if (status === 'In Preparation') {
      handleClick(order.id, 'In Transit');
    }
  };

  return (
    <div>
      <NavBar titlePage="Order Details" sellersOrders="My orders" />
      <Card
        products={ products }
        order={ order }
        handleClick={ () => switchButton(order.status) }
        buttonName={ order && (
          order.status === 'Pendente' ? 'Mark as In Preparation' : 'Mark as In Transit'
        )}
        disabled={ order && order.status === 'In Transit' }
      />
    </div>
  );
}

export default SellerOrderDetails;
