import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let filtered = products.slice();
      
      // Filter products by category and subCategory
      filtered = filtered.filter((item) => category === item.category);
      filtered = filtered.filter((item) => subCategory === item.subCategory);

      // Update the related state (limit to 5 items)
      setRelated(filtered.slice(0, 5));
    }
  }, [products, category, subCategory]);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-100">
      <Title 
        title1="Related" 
        title2="Products" 
        titleStyles="text-2xl font-bold text-center mb-8" 
        paraStyles="text-gray-600 text-center" 
      />
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {related.map((product) => (
          <div
            key={product._id}
            onClick={scrollToTop} // Trigger scroll to top on product click
            className="cursor-pointer shadow-lg rounded-lg p-4 bg-white hover:shadow-xl transition duration-300"
          >
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
