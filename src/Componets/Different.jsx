import React from 'react';
import { GrAchievement } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import acheivementImg from "../assets/acheviment.png"
const Different = () => {
    return (


<div className="my-16 mx-auto px-4 ">
  <div className="flex flex-col lg:flex-row items-center bg-[#AD56C4] shadow-md rounded-lg overflow-hidden">
    
    {/* Text Section */}
<div className="w-full lg:w-1/2 p-8">
<h2 className="text-3xl font-bold mb-4 text-white">
   Why <span className='text-[#f000b8]'>Freelance Fusion</span> is Different From Others!
</h2>
<ul className="space-y-4 text-gray-700">
<li className="flex items-start">
    <span className="text-[#FFFA8D] font-bold mr-2">
        <GrAchievement size={35}/></span>
        <p className='text-white italic'> <span className='text-white font-bold italic'> Proof of talent –</span >  Verified profiles, real feedback, and clear credentials.</p>
        </li>
<li className="flex items-start">
    <span className="text-[#FFFA8D] font-bold mr-2"><GiPayMoney size={37}/></span>
          <p  className='text-white italic'><span className='text-white font-bold italic'>Pay only when you hire – </span>Interview for free, pay once you’re satisfied.</p>
</li>
<li className="flex items-start">
<span className="text-[#FFFA8D] font-bold mr-2"><AiOutlineSafety size={35}/></span>
    <p className='text-white italic'>
        <span className='text-white font-bold italic'>24/7 secure platform – </span>Your work and privacy are always protected.</p>
        </li>
      </ul>
<div className="mt-6">
  <button className="btn btn-primary">Log In Now</button>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <img
        src={acheivementImg}
        alt="Freelancer"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

    );
};

export default Different;