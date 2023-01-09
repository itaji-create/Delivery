import { useEffect, useState } from 'react';

function SellerOrders() {
  const [orders, setOrders] = useState();

  const fetchOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
      const data = await requestGet(`/sales/sellerId/${user.id}`);
      console.log(data);
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

  console.log(orders);

  return (
    <div>
      Ola mundo
    </div>
  );
}

export default SellerOrders;
