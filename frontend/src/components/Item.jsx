import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="relative top-12 shadow-lg rounded-xl m-4 bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col items-center">
      {/* Image Section */}
      <Link to={`/product/${product._id}`} className="w-full h-48 overflow-hidden rounded-t-xl relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        {/* Badge */}
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
          New
        </span>
      </Link>

      {/* Product Details */}
      <div className="p-4 w-full text-center">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-blue-600 font-semibold text-lg my-2">
          Tzs.{product.price}00.00
        </p>
        <div className="flex items-center justify-center gap-x-1 my-2">
          <FaStar className="text-yellow-400" />
          <span className="text-sm font-medium text-gray-600">5.0</span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
      </div>

      
    </div>
  );
};

export default Item;
