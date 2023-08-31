import { useState, useEffect } from 'react';
import Card from '../components/productsCard';
import NavBar from '../components/navBar';
import { requestGet } from '../utils/requests';

function Products() {
  const [products, setProducts] = useState();
  const fetchProducts = async () => {
    const productsData = await requestGet('/products');
    console.log(productsData);
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar cart="Shopping Cart" orders="My orders" />
      <div className="container mt-5">
        <div className="row">
          {products && products.map((product) => (
            <Card key={ product.id } product={ product } />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
