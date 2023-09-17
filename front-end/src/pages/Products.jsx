import { useState, useEffect } from 'react';
import Card from '../components/productsCard';
import NavBar from '../components/navBar';
import { requestGet } from '../utils/requests';
import PageNavi from '../components/pageNavi';

function Products() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);
  const f = 15;

  const fetchProducts = async () => {
    const url = window.location.href;
    const match = url.match(/\/products(.*)/);
    const productsData = await requestGet(`/products${match[1] || ''}`);
    setProducts(productsData);
    console.log(productsData);
    setPage(Number(match[0][match[0].length - 1]) || 1);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <NavBar cart="Shopping Cart" orders="My orders" titlePage="Delivery App" />
      <PageNavi page={ page } next={ products && products.length < f } />
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
