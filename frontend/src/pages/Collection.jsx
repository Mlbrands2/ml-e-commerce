import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import ShowSearch from '../components/ShowSearch';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleFilter = (value, setFilter) => {
    setFilter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = products;

    if (category.length > 0) {
      filtered = filtered.filter((product) => category.includes(product.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((product) => subCategory.includes(product.subCategory));
    }

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortType === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const filteredProducts = applyFilter();

  const getPaginatedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= rating ? <FaStar className="text-yellow-400" /> : <FaRegStar className="text-gray-300" />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="max-padd-container px-4 lg:px-8 bg-blue-100 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Filter Options */}
        <div className="lg:w-1/4 bg-primary-light p-6 rounded-lg shadow-md">
          <ShowSearch />
          <div className="mt-6">
            <h5 className="text-lg font-semibold text-primary-dark mb-4">Categories</h5>
            <div className="flex flex-col gap-2">
              {["Cattle", "Goats", "Poultry"].map((cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    type="checkbox"
                    value={cat}
                    className="w-4 h-4"
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-lg font-semibold text-primary-dark mb-4">Condition/Purpose</h5>
            <div className="flex flex-col gap-2">
              {["Breeding", "Slaughter", "Pets"].map((subCat) => (
                <label key={subCat} className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
                    type="checkbox"
                    value={subCat}
                    className="w-4 h-4"
                  />
                  {subCat}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Sort By Dropdown */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Available Livestock</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-600">Sort By:</span>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="border border-slate-900/5 outline-none text-gray-800 medium-14 h-8 w-full rounded px-2"
              >
                <option value="relevant">Relevant</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {getPaginatedProducts().length > 0 ? (
              getPaginatedProducts().map((product) => (
                <Link
                  to={`/product/${product._id}`}
                  key={product.id}
                  className="block p-4 bg-white border rounded-lg shadow-sm hover:shadow-md"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h5 className="text-lg font-semibold text-gray-800">{product.name}</h5>
                  <p className="text-sm text-gray-600">Price: {product.price} Tzs</p>
                  <div className="flex items-center mt-2">{renderStars(product.rating)}</div>
                </Link>
              ))
            ) : (
              <p className="text-gray-600">No products found for the selected filters.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
                }`}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === i + 1
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
