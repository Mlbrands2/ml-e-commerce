import React, { useContext, useState } from 'react'; 
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbBasket } from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import {ShopContext} from '../context/ShopContext';

const Header = () => {
  const {token}=useContext(ShopContext)
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <header className="header-container w-full z-50 bg-white text-black shadow-md">
      <div className="header-content max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to={"/"} className="flex items-center text-xl font-bold">
            ML <span className="text-secondary">_e-market</span>
          </Link>
        </div>

        {/* Navbar Section */}
        <div className="hidden xl:flex">
          <Navbar containerStyles="flex gap-x-10 font-medium" />
        </div>

        {/* Mobile Navbar */}
        <div
          className={`${
            menuOpened ? "flex" : "hidden"
          } flex-col gap-y-4 fixed top-16 right-6 bg-white p-5 rounded-xl shadow-md w-48 
          ring-1 ring-slate-900/5 z-50 xl:hidden`}
        >
          <Navbar containerStyles="flex flex-col gap-y-4" />
        </div>

        {/* Action Buttons Section */}
        <div className="flex items-center gap-4">
          {/* Menu Toggle */}
          <FaBarsStaggered
            onClick={toggleMenu}
            className="xl:hidden cursor-pointer text-xl"
          />

          {/* Search Icon */}
          <FaSearch className="text-lg cursor-pointer" />

          {/* Cart Icon */}
          <Link to={"/cart"} className="relative flex items-center">
            <TbBasket className="text-2xl" />
            <span className="absolute bg-secondary text-white text-xs font-semibold flex items-center justify-center w-4 h-4 rounded-full -top-2 -right-2">
              0
            </span>
          </Link>

          {/* User Profile */}
          <div className="relative">
            {token ? (
              <TbUserCircle className="text-2xl cursor-pointer" />
            ) : (
              <button className="btn-light px-4 py-2 rounded-md flex items-center gap-2">
                Login <RiUserLine className="text-lg" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
