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
      <NavBar />
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
