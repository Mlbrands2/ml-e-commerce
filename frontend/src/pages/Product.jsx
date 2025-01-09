import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa';
import { TbShoppingBagPlus } from 'react-icons/tb';
import { ShopContext } from '../context/ShopContext';
import ProductDescription from '../components/ProductDescription';
import ProductFeatures from '../components/ProductFeatures';
import RelatedProducts from '../components/RelatedProducts';
import Footer from '../components/Footer';

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!product) {
    return <div className="text-center text-xl mt-10">...loading</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Images Section */}
        <div className="flex flex-col lg:w-1/2 gap-4">
          {/* Thumbnails */}
          <div className="flex gap-2">
            {product.image.slice(0, 4).map((item, i) => (
              <img
                key={i}
                src={item}
                alt={`Thumbnail-${i}`}
                className="w-20 h-20 rounded-lg border border-gray-300 cursor-pointer hover:shadow-lg"
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="Main Product"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">{product.name}</h1>

          {/* Rating and Price */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <span className="text-gray-600 text-sm">(122 reviews)</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            {currency}
            {product.price}000.00
          </h2>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Sizes */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Select Size:</h3>
            <div className="flex gap-2">
              {[...product.sizes]
                .sort((a, b) => {
                  const order = ["S", "M", "L", "XL", "XXL"];
                  return order.indexOf(a) - order.indexOf(b);
                })
                .map((item, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 border rounded-md ${
                      size === item
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
              Add to Cart <TbShoppingBagPlus />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300">
              <FaHeart /> Wishlist
            </button>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center gap-4 text-gray-600">
            <FaTruckFast className="text-2xl" />
            <span>Free delivery for orders over 20 animals</span>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="mt-8">
        <hr className="mb-6" />
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Authenticity You Can Trust
        </h3>
        <p className="text-gray-600 mb-6">Enjoy cash on delivery for your convenience.</p>
        <ProductDescription />
        <ProductFeatures />
        <RelatedProducts category={product.category} subCategory={product.subCategory} />
      </div>

      <Footer />
    </div>
  );
};

export default Product;
