import React from 'react';
import { FaMailBulk } from 'react-icons/fa';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-primary text-slate-800">
        <div>
          <h4 className="h4">Your Trusted Livestock Marketplace</h4>
          <p>
            Connecting livestock buyers and sellers across Tanzania. We ensure trust,
            quality, and convenience for all your livestock trading needs.
          </p>
        </div>
        <div className="flexStart flex-wrap gap-8">
          {/* Location */}
          <div className="flexCenter gap-x-6">
            <FaLocationDot size={24} />
            <div>
              <h5 className="h5">Our Location</h5>
              <p>Dsm, Tanzania</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flexCenter gap-x-6">
            <FaPhone size={24} />
            <div>
              <h5 className="h5">Call Us</h5>
              <p>+255 123 456 789</p>
            </div>
          </div>
          {/* Email */}
          <div className="flexCenter gap-x-6">
            <FaMailBulk size={24} />
            <div>
              <h5 className="h5">Email Us</h5>
              <p>support@ml-E-market.co.tz</p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* Logo and About */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <div className="bold-32">
            ML<span className="text-secondary">_e-Market</span>
          </div>
          <p>
            Transforming the way livestock trading is done in Tanzania with a 
            platform that offers trust, convenience, and reliable services.
          </p>
        </div>

        {/* Links */}
        <div className="flexStart gap-7 xl:gap-x-36 flex-wrap">
          {/* Customer Support */}
          <ul>
            <h4 className="h4 mb-3">Customer Support</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Help Center</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Payment Options</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Shipping Info</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Complaints</a>
            </li>
          </ul>

          {/* Legal */}
          <ul>
            <h4 className="h4 mb-3">Legal</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Privacy Policy</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Terms & Conditions</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Cancellation Policy</a>
            </li>
          </ul>

          {/* Resources */}
          <ul>
            <h4 className="h4 mb-3">Resources</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">About Us</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Livestock Tips</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">Farmer Stories</a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14">News & Updates</a>
            </li>
          </ul>
        </div>
      </div>

            {/* copyrights */}
      <p className='max-padd-container bg-primary medium-14 py-2 px-8 rounded flexBetween mt-6'><span>2025 ML e-market</span><span>All rights reserved</span></p>
    </footer>
  );
};

export default Footer; 
