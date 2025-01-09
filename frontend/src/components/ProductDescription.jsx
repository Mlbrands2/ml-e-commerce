import React, { useState } from 'react';
import { FaInfoCircle, FaLeaf, FaRuler } from 'react-icons/fa';

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('description'); // State for active tab

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product Description</h2>
      
      {/* Tabs Navigation */}
      <div className="flex justify-center gap-4 mb-6 border-b pb-4">
        <button
          className={`flex items-center gap-2 text-lg font-medium ${
            activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('description')}
        >
          <FaInfoCircle /> Description
        </button>
        <button
          className={`flex items-center gap-2 text-lg font-medium ${
            activeTab === 'careGuide' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('careGuide')}
        >
          <FaLeaf /> Care Guide
        </button>
        <button
          className={`flex items-center gap-2 text-lg font-medium ${
            activeTab === 'sizeGuide' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'
          }`}
          onClick={() => setActiveTab('sizeGuide')}
        >
          <FaRuler /> Size Guide
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-700">
        {activeTab === 'description' && (
          <div>
            <p className="leading-relaxed">
              Our livestock is carefully selected to ensure top-notch quality and performance. Whether you're looking for 
              high milk yield, superior meat production, or wool, our animals are bred and raised to meet your specific needs.
            </p>
            <p className="mt-4">
              All livestock undergoes rigorous health checks and is acclimatized to Tanzanian climatic conditions for better adaptability.
            </p>
          </div>
        )}

        {activeTab === 'careGuide' && (
          <div>
            <ul className="list-disc pl-5 leading-relaxed">
              <li>Provide a clean and spacious shelter for the livestock.</li>
              <li>Ensure a balanced diet with sufficient nutrients for growth and production.</li>
              <li>Schedule regular health check-ups with a qualified veterinarian.</li>
              <li>Vaccinate and deworm the animals periodically.</li>
              <li>Provide clean drinking water at all times.</li>
              <li>Maintain proper hygiene to prevent diseases.</li>
            </ul>
          </div>
        )}

        {activeTab === 'sizeGuide' && (
          <div>
            <p>
              Use this size guide to ensure you select the livestock that best fits your farm's needs:
            </p>
            <table className="table-auto w-full mt-4 border text-left text-gray-600">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-2 border">Age</th>
                  <th className="p-2 border">Weight (Kg)</th>
                  <th className="p-2 border">Ideal Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">6-12 months</td>
                  <td className="p-2 border">50-80</td>
                  <td className="p-2 border">Growth and Breeding</td>
                </tr>
                <tr>
                  <td className="p-2 border">12-18 months</td>
                  <td className="p-2 border">80-120</td>
                  <td className="p-2 border">Milk or Meat Production</td>
                </tr>
                <tr>
                  <td className="p-2 border">18+ months</td>
                  <td className="p-2 border">120-180</td>
                  <td className="p-2 border">High Yield Production</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
