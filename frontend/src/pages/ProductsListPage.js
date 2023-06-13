import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
// import AddButton from '../components/AddButton'


const ProductsListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch('/api/products/');
      const data = await response.json();
      console.log(data)
      setProducts(data);
    } catch (error) {
      console.error('Error retrieving products:', error);
    }
  };

  return (
    <div className="products">
      <div className="products-header">
        <h2 className="products-title">&#9782; Webáruházunk termékei</h2>

        <p className="products-count">Összes termék: {products.length} darab</p>
      </div>

      <div className="row">

          {products.map((product) => (
              <ListItem key={product.id} product={product} />
          ))}
      </div>
      {/*<AddButton />*/}
    </div>
  );
};

export default ProductsListPage;
