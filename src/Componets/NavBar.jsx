import React, { use } from 'react';
import logo from "../assets/mylogo.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
 import userIcon from "../assets/user.png";
import DarkModeToggler from './DarkModeToggler';
const NavBar = () => {

    const {user,logOut} = use(AuthContext);

    const handleLogOut =() =>{
      console.log("user trying to logOut");
      logOut()
      .then(() => {
alert('successfully logOut')
}).catch((error) => {
  console.log(error);
});
    }
    return (
<div className='w-full mx-auto'>
      <div className="navbar bg-[#FFC2BA] shadow-md fixed top-0 left-0 z-50 px-4">
        {/* 📌 Navbar Start */}
        <div className="navbar-start">
          {/* dropdown for mobile */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   className="h-6 w-6" fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to='/' className={({ isActive }) =>
                  isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
                }>Home</NavLink>
              </li>
              <li>
                <NavLink to='/browse-task' className={({ isActive }) =>
                  isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
                }>Browse Tasks</NavLink>
              </li>

              {/* 📌 Show Add Task + My Posted Task only when logged in */}
              {user && (
                <>
                  <li>
                    <NavLink to='/add-task' className={({ isActive }) =>
                      isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
                    }>Add Task</NavLink>
                  </li>
                  <li>
                    <NavLink to='/my-posted-task' className={({ isActive }) =>
                      isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
                    }>My Posted Tasks</NavLink>
                  </li>
                </>
              )}

              {!user && (
                <>
                  <li><NavLink to="/auth/login">Login</NavLink></li>
                  <li><NavLink to="/auth/register">Register</NavLink></li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} 
                 className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded object-contain hidden lg:block" />
            <h1 className="text-base lg:text-lg font-bold text-[#AD56C4]">
              FreeLance<span className="text-[#FF9CE9]">Fusion</span>
            </h1>
          </Link>
        </div>

        {/* 📌 Navbar Center (desktop menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li>
              <NavLink to='/' className={({ isActive }) =>
                isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to='/browse-task' className={({ isActive }) =>
                isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
              }>Browse Tasks</NavLink>
            </li>

            {/* 📌 Show these only for logged in users */}
            {user && (
              <>
                <li>
                  <NavLink to='/add-task' className={({ isActive }) =>
                    isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
                  }>Add Task</NavLink>
                </li>
                <li>
                  <NavLink to='/my-posted-task' className={({ isActive }) =>
                    isActive ? "text-[#AD56C4] font-bold" : "text-gray-600 font-semibold"
                  }>My Posted Tasks</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* 📌 Navbar End */}
        <div className="navbar-end gap-3">
          <DarkModeToggler />

          {!user ? (
            <div className="hidden lg:flex gap-2">
              <Link to="/auth/login">
                <button className="btn btn-sm btn-outline btn-secondary">Login</button>
              </Link>
              <Link to="/auth/register">
                <button className="btn btn-sm btn-secondary">Register</button>
              </Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="User profile" src={user?.photoURL || userIcon} />
                </div>
              </div>
              <ul tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li className="font-semibold text-gray-700">{user?.displayName || user?.email}</li>

                {/* 📌 Add Task + My Posted Task in dropdown */}
                <li>
                  <NavLink to="/add-task">Add Task</NavLink>
                </li>
                <li>
                  <NavLink to="/my-posted-task">My Posted Tasks</NavLink>
                </li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default NavBar;