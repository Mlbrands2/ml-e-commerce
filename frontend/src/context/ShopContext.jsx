import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../assets/data';

// Create the ShopContext
export const ShopContext = createContext();

const ShopContextProvider = ( props ) => {
  // Define shared values
  const currency = "Tzs";
  const delivery_charges = 10; // Use camelCase for consistency
  const navigate = useNavigate();
  
const [search, setSearch] = useState("")
const [showSearch, setShowSearch]=useState(true)
const [token, setToken]=useState("")
  // Context value object
  const value = {
    currency,
    delivery_charges,
    navigate,
    products,
    token,
    setToken,
    search,
    setSearch,
    showSearch,
    setShowSearch

  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
