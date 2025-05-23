import React from 'react';

const TaskDetailsCard = ({taskDetails}) => {
    // console.log(taskDetails);

const {_id,title,category,description,deadline,budget,details,userName,email} = taskDetails || {};

    return (
       <div className="px-4 sm:px-6 md:px-8">
      <div className="bg-[#FF8DA1] text-black rounded-lg shadow-lg p-4 flex flex-col md:flex-row items-center gap-6">


        <div className="relative w-24 h-24 md:w-28 md:h-28">
         <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Task illustration"
            className="w-full h-full object-cover rounded-full border border-yellow-300"
          />
        </div>

        <div className="w-full text-center">

         
          <h2 className="text-2xl font-bold mb-1">{title}</h2>

         
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-blue-700 text-sm sm:text-base">
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Deadline:</strong> {deadline}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Details:</strong> {details}</p>
          </div>

          {/* ✅ User + Email in second row, centered, no gap */}
          <div className="flex justify-center gap-6 text-blue-700 text-sm sm:text-base mt-1">
            <p><strong>User:</strong> {userName}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>

        </div>
      </div>
    </div>
    );
};

export default TaskDetailsCard;