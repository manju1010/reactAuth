import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-4 sm:mx-[10%]">
      <div className="flex items-center justify-between text-sm py-4 mb-5 gap-10 border-b border-b-gray-400">
        {/* Left Side Navigation Links */}
        <ul className="hidden md:flex items-start gap-7 font-medium">
          <NavLink to="/">
            <li className="py-4">HOME</li>
          </NavLink>
          <NavLink to="/dashboard">
            <li className="py-4">DASHBOARD</li>
          </NavLink>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex gap-5">
          <button
            onClick={() => navigate('/login', { state: { pageState: 'sign up' } })}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            SIGN UP
          </button>

          <button
            onClick={() => navigate('/login', { state: { pageState: 'login' } })}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
