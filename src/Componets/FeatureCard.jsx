import React from 'react';

const FeatureCard = ({ task }) => {
     const { title, category, deadline, budget, details } = task;
    return (
        <div>
          
 <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{deadline}</span>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{category}</h2>
          <span className="text-xl">${budget}</span>
        </div>
        <p className="mt-2 font-semibold">{title}</p>
        <p className="text-sm text-gray-500">{details}</p>
       
      </div>
    </div>
        </div>
    );
};

export default FeatureCard;