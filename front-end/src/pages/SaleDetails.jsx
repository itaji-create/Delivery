import React, { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import { requestGet } from '../utils/requests';
import Card from '../components/saleDetailsCard';

function SaleDetails() {
  const [order, setOrder] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    const id = window.location.href.split('orders/')[1];
    requestGet(`sales/${id}`).then((data) => setOrder(data));
    requestGet(`sales/products/${id}`).then((data) => setProducts(data));
  }, []);

  return (
    <section>
      <NavBar />
      <Card products={ products } order={ order } />
    </section>
  );
}

export default SaleDetails;
