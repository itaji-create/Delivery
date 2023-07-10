import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/card';
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
      <NavBar />
      <Link to="/customer/checkout">
        Ver Carrinho
      </Link>
      <h2 className="text-center mb-4">Produtos</h2>
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
