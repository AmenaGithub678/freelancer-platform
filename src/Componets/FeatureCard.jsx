import React from 'react';

const FeatureCard = ({ task }) => {
 const { title, category, deadline, budget, details } = task;
return (
  <div>
          
 <div className="card bg-base-100 shadow-sm">
   <div className="card-body">
    <span className="badge badge-xs 
    badge-warning 
    font-normal text-lg text-[#f000b8] py-3">{deadline}</span>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{category}</h2>
          <span className="text-xl">$
            <span className='text-gray-600'>{budget}
            </span></span>
        </div>
        <p className="mt-2 font-semibold">{title}</p>
        <p className="text-sm text-[#f000b8]">{details}</p>
       
      </div>
    </div>
        </div>
    );
};

export default FeatureCard;