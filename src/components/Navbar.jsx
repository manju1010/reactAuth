import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
       <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className=" py-4">HOME</li>
         
        </NavLink>

        <NavLink to="/">
          <li className="py-4"> DASHBOARD</li>
          
        </NavLink>
    </ul>
    </div>
  )
}

export default Navbar
