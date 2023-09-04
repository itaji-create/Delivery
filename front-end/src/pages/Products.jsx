import { useState, useEffect } from 'react';
import Card from '../components/productsCard';
import NavBar from '../components/navBar';
import { requestGet } from '../utils/requests';

function Products() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);

  const fetchProducts = async (number) => {
    const productsData = await requestGet(`/products?page=${number || 1}`);
    setProducts(productsData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar cart="Shopping Cart" orders="My orders" />
      <div>
        <button
          type="button"
          onClick={ () => {
            if (page > 1) {
              fetchProducts(page - 1);
              setPage(page - 1);
            }
          } }
        >
          Previous
        </button>
        <button
          type="button"
          onClick={ () => {
            fetchProducts(page + 1);
            setPage(page + 1);
          } }
        >
          Next
        </button>
      </div>
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
