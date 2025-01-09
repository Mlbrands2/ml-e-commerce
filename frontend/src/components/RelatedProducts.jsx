import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FaShoppingCart } from 'react-icons/fa';

const RelatedProducts = () => {
  const { products } = useContext(ShopContext); // Access the products data from context

  return (
    <div className="mt-16 bg-secondary p-8 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Related Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Loop through the products to display related ones */}
        {products.slice(0, 4).map((product) => (
          <div key={product._id} className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
            {/* Remove dark background and ensure clean links */}
            <Link to={`/product/${product._id}`} className="relative w-full h-64 mb-6">
              <img 
                src={product.image[0]} 
                alt={product.name} 
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg">
                <FaShoppingCart className="text-lg text-gray-800" />
              </div>
            </Link>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description.slice(0, 80)}...</p>
            <div className="flex justify-between items-center w-full">
              <span className="text-lg font-bold text-gray-900">{product.price} {product.currency}</span>
              {/* View Details link */}
              <Link 
                to={`/product/${product._id}`} 
                className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
