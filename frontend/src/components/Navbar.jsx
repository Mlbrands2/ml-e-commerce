import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/Collection", title: "Collection" },
    { path: "/Testimonials", title: "Testimonials" },
    { path: "/mailto:info@mlbrands.com", title: "Contact" },
  ];

  return (
    <nav className={containerStyles}>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.path}
          className={({ isActive }) =>
            `${isActive ? "bg-blue-500 text-white" : ""} hover:bg-blue-100 
            px-3 py-2 rounded-full transition duration-300 ease-in-out`
          }
        >
          <div className="flex items-center gap-x-1">{link.title}</div>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
