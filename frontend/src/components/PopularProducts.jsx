import React, { useEffect, useState, useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';

const PopularProducts = () => {
  const { products } = useContext(ShopContext);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setPopularProducts(data.slice(0, 5));
  }, [products]);

  return (
    <section className="max-padd-container py-12">
      {/* Title Section */}
      <Title 
        title1="Popular" 
        title2="Products" 
        titleStyles="pb-10" 
        paraStyles="!block" 
      />
      
      {/* Popular Products Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {popularProducts.map((product) => (
          <div key={product._id} className="flex justify-center">
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
