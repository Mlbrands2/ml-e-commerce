import React from 'react';
import { FaShieldAlt, FaShippingFast, FaHandshake } from 'react-icons/fa';

const ProductFeatures = () => {
  return (
    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Secure Payment */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <FaShieldAlt className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Payment</h3>
          <p className="text-gray-600">
            Enjoy worry-free transactions with our robust and secure payment gateway, ensuring your financial details remain safe.
          </p>
        </div>

        {/* Fast Delivery */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <FaShippingFast className="text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your livestock delivered quickly and safely to your doorstep, minimizing stress for you and the animals.
          </p>
        </div>

        {/* Safe Agreement */}
        <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <FaHandshake className="text-4xl text-orange-600 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Safe Agreement</h3>
          <p className="text-gray-600">
            We prioritize transparency and trust, ensuring all transactions are backed by clear agreements and customer protection.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
