import { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import Order from '../components/orderCard';
import { requestGet } from '../utils/requests';

function SellerOrders() {
  const [orders, setOrders] = useState();

  const user = JSON.parse(localStorage.getItem('user'));
  const fetchOrders = async () => {
    try {
      console.log(user);
      const data = await requestGet(`/sales/seller/${user.id}`);
      setOrders(data);
    } catch (error) {
      console.log(error);
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
    <div>
      <NavBar titlePage="Sales" />
      {orders && orders.map((order) => (
        <Order key={ order.id } role={ user.role } order={ order } />
      ))}
    </div>
  );
}

export default SellerOrders;
