import React, { use } from 'react';
import logo from "../assets/mylogo.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
 import userIcon from "../assets/user.png";
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
<div className="navbar bg-base-100 shadow-sm mt-8">
<div className="navbar-start">
    {/* dropdown */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost 
      btn-circle 
      lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-btn-color rounded-box z-1 mt-3 w-52 p-2 shadow">
<li 
className=' font-semibold 
text-lg 
text-[#f000b8]'>
    <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
     } to='/'>Home</NavLink></li>
<li className=' font-semibold text-lg text-[#f000b8]'>
    <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to='/add-task'>Add Task</NavLink></li>
<li className=' font-semibold text-lg text-[#f000b8]'>
          <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to='/browse-task'>Browse Tasks</NavLink></li>
<li className=' font-semibold text-lg text-[#f000b8]'>
          <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to='/my-posted-task'>My  Posted Tasks</NavLink></li>


        <li className=' font-semibold text-lg text-[#f000b8]'>

          <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to="/auth/login">Login</NavLink></li>
        <li className=' font-semibold text-lg text-[#f000b8]'>
          <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to="/auth/register">Register</NavLink></li>
      </ul>
    </div>
    {/* logo section */}
<a className="text-xl text-[#0F0F0FCC] font-bold flex"> <img src={logo} className="w-[40px] h-[40px] rounded object-contain"/>
<h1 className="text-lg font-bold text-[#AD56C4]">
  FreeLance<span className="font-bold text-[#FF9CE9]">Fusion</span>
</h1>
</a>

  </div>
  <div className="navbar-center hidden lg:flex">
   <ul
        tabIndex={0}
        className="menu menu-horizontal px-1">


<li 
className=' font-semibold 
text-lg 
text-[#f000b8]'>
    <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
     } to='/'>Home</NavLink></li>
<li className=' font-semibold text-lg text-[#f000b8]'>
    <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to='/add-task'>Add Task</NavLink></li>
<li className=' font-semibold text-lg text-[#f000b8]'>
          <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to='/browse-task'>Browse Tasks</NavLink></li>
<li className=' font-semibold text-lg text-[#f000b8]'>
          <NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to='/my-posted-task'>My  Posted Tasks</NavLink>
      </li>

<li className=' font-semibold text-lg text-[#f000b8]'>
<NavLink className={({ isActive }) =>
        isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"
      } to='/contact'>Contact Us</NavLink>
      </li>

      </ul>
  </div>


<div className="navbar-end">
  {!user ? (
    <div className="hidden lg:flex gap-4 items-center">
      <Link to="/auth/login">
        <button className="btn btn-outline btn-secondary">Login</button>
      </Link>
      <Link to="/auth/register">
        <button className="btn btn-outline btn-secondary">Register</button>
      </Link>
    </div>
  ) : (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User profile"
            src={user?.photoURL || userIcon} 
          />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <span className="font-bold">{user?.displayName || user?.email}
          </span>
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