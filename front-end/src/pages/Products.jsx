import { useState, useEffect } from 'react';
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
      {products && products.map((product) => {
        product.quantity = 0;
        return (
          <Card key={ product.id } product={ product } />
        );
      })}
    </div>
  );
}

export default Products;
