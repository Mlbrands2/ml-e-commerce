import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import banner from '../assets/pic6.jpeg';

const Banner = () => {
  return (
    <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12 bg-slate-300">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side: Text Content */}
        <div className="max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Connecting Farmers, <br /> Transforming Livestock Trade
          </h2>
          <h3 className="text-lg lg:text-xl mt-4 text-gray-600">
            List Your Livestock Today & Reach Thousands!
          </h3>
          <Link
              to="/collection"
              className="inline-flex items-center bg-slate-700 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Explore Quality Livestock
              <FaArrowRight className="bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg] transition-all duration-500" />
            </Link>
        </div>

        {/* Right Side: Image */}
        <div className="flex-shrink-0 w-full lg:w-1/2 max-w-[400px] max-h-[300px]">
          <img
            src={banner}
            alt="Livestock marketplace banner"
            className="w-full h-full object-contain rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
