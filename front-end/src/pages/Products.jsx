import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';
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
      <Link to="/customer/checkout">
        Ver Carrinho
      </Link>
      {products && products.map((product) => (
        <Card key={ product.id } product={ product } />
      ))}
    </div>
  );
}

export default Products;
