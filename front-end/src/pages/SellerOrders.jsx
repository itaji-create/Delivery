import { useEffect, useState } from 'react';
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

  const handleClick = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div>
            <button type="button">Pedidos</button>
          </div>
          <div>
            <span>
              { user && user.name }
            </span>
            <button
              type="button"
              onClick={ handleClick }
            >
              Sair
            </button>
          </div>
        </nav>
      </header>
      {orders && orders.map((order) => (
        <Order key={ order.id } role={ user.role } order={ order } />
      ))}
    </div>
  );
}

export default SellerOrders;
