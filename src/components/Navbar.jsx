import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  return (

   
    <div className='mx-4 sm:mx-[10%]'>
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
       <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className=" py-4">HOME</li>
         
        </NavLink>

        <NavLink to="/">
          <li className="py-4"> DASHBOARD</li>
          
        </NavLink>
    </ul>

    <button
            onClick={() => navigate('/login')}
            className="bg-primary text-white px-8 py-3 rounded-full font-light  hidden md:block"
          >
            
            CREATE ACCOUNT
          </button>
    </div>
    </div>
  )
}

export default Navbar
