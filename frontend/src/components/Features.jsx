import React from "react";
import img1 from "../assets/pic1.jpeg";
import img2 from "../assets/pic2.jpeg";

const Features = () => {
  return (
    <section className="py-12 bg-gray-100">
      {/* Container */}
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Why Choose Us
        </h2>

        {/* Features Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={img1}
              alt="Streamlined Experience"
              height={77}
              width={77}
              className="rounded-full shadow-md mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Streamlined Buying Experience
            </h4>
            <p className="text-gray-600 max-w-xs">
              "The e-livestock market has completely transformed how I source
              livestock for my farm. The user-friendly interface made it easy to
              browse through different breeds and select the ones I needed."
              <br />
              — John M., Dairy Farmer, Arusha
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={img2}
              alt="Reliable Marketplace"
              height={77}
              width={77}
              className="rounded-full shadow-md mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Reliable Marketplace for Sellers
            </h4>
            <p className="text-gray-600 max-w-xs">
              "As a livestock seller, I struggled to find a reliable platform to
              connect with serious buyers. My sales have doubled, and I’ve built
              trust with repeat customers."
              <br />
              — Fatima K., Goat Breeder, Dodoma
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={img2}
              alt="Empowering Farmers"
              height={77}
              width={77}
              className="rounded-full shadow-md mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Empowering Small-Scale Farmers
            </h4>
            <p className="text-gray-600 max-w-xs">
              "This platform is a game-changer for small-scale farmers. I could
              list my livestock for sale at fair prices and connect with buyers
              easily."
              <br />
              — Emmanuel L., Poultry Farmer, Mbeya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
