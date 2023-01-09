import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import Order from '../components/orderCard';
import { requestGet } from '../utils/requests';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));
  const fetchOrders = async () => {
    try {
      const data = await requestGet(`/sales/userId/${user.id}`);
      setOrders(data);
    } catch (error) {
      if (error.message.includes('401')) {
        localStorage.removeItem('user');
        navigate('/login');
      }
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <section>
      <header>
        <NavBar />
      </header>
      <main>
        { orders
          ? orders.map((sale) => (
            <Order key={ sale.id } role={ user.role } order={ sale } />
          ))
          : <h1> Você ainda não possui pedido</h1> }
      </main>
    </section>
  );
}

export default CustomerOrders;
