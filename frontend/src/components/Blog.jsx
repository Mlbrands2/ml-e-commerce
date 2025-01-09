import React from 'react';
import Title from './Title';
import { blogs } from '../assets/data';

const Blog = () => {
  return (
    <section className="py-10">
      {/* Title Section */}
      <Title 
        title1="Our" 
        title2=" Expert Blog" 
        titleStyles="pb-10 text-center text-3xl font-bold" 
        paraStyles="!block text-center text-gray-500"
      />

      {/* Blog Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {blogs.map((blog) => (
          <div 
            key={blog.title} 
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Blog Image */}
            <img 
              src={blog.image} 
              alt={`Image for ${blog.title}`} 
              className="w-full h-48 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Blog Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-bold">{blog.title}</h3>
              <h4 className="text-sm text-gray-300">{blog.category}</h4>
              <button 
                className="mt-2 px-4 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                Continue Reading
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
