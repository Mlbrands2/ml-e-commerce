import React from 'react';
import heroImg from '../assets/pic3.jpeg';
import bgImage from '../assets/pic18.jpeg'; // Background image path
import { BsDroplet } from 'react-icons/bs';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url(${bgImage})` }} // Background image styling
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white bg-opacity-70 p-8 rounded-xl shadow-lg">
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/2 text-center md:text-left">
          {/* Image */}
          <img
            src={heroImg}
            alt="Livestock Market"
            className="rounded-3xl shadow-lg mx-auto mb-3"
          />

          {/* Play Icon Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="group relative flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              {/* Glow Effect */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-blue-500 opacity-30 blur-lg group-hover:opacity-50 transition duration-300"></div>
              {/* Smaller Play Icon */}
              <FaPlay className="text-white text-xs relative left-[1px] group-hover:scale-125 transition-all duration-300" />
            </div>
          </div>

          {/* Text below image */}
          <div className="w-[211px] mx-auto">
            <p className="text-lg font-semibold text-gray-700 text-center bg-white p-3 rounded-lg shadow-md">
              <span className="uppercase text-blue-500 font-bold">UNLOCK</span>{" "}
              Start Your Journey to Superior Livestock Today!
            </p>
          </div>
        </div>

        {/* Right Side: Text */}
        <div className="text-center md:text-left md:w-1/2 px-6">
          <h5 className="text-lg font-semibold text-secondary flex items-center justify-center md:justify-start gap-2 mb-4 uppercase">
            Modern livestock market <BsDroplet className="text-blue-500" />
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Every Click Brings You Closer To Perfect livestock.
            <br />
            <span className="text-secondary">Grab you animal Now!</span>
          </h1>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/collection"
              className="inline-flex items-center bg-blue-500 text-white font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Check Our Modern livestock Collection
              <FaArrowRight className="bg-secondary text-white rounded-full h-11 w-11 p-3 m-[3px] border border-white group-hover:-rotate-[20deg] transition-all duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
