import React from 'react';

const TaskDetailsCard = ({taskDetails, handleBid}) => {
    // console.log(taskDetails);

const {_id,title,category,description,deadline,budget,details,userName,email} = taskDetails || {};

return (
 <div className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto py-6">
  <div className="card bg-base-100 shadow-sm">
   <div className="card-body">
     {/* Deadline Badge */}
   <span className="badge badge-xs badge-warning font-normal text-lg text-[#f000b8] py-3">
            {deadline}
          </span>

{/* Header Section */}
  <div className="flex justify-between items-start flex-col md:flex-row md:items-center gap-2">
  <h2 className="text-2xl font-bold">{category}</h2>
   <span className="text-xl">
   $<span className="text-gray-600">{budget}</span>
  </span>
  </div>

   {/* Title */}
 <p className="mt-2 font-semibold">{title}</p>
{/* Description */}
<p className="text-sm text-[#f000b8]">{description}</p>

 {/* Details */}
<p className="text-sm text-[#f000b8]">{details}</p>

          {/* User Info */}
<div className="flex justify-between text-blue-700 text-sm sm:text-base mt-4">
<p><strong>User:</strong> {userName}</p>
<p><strong>Email:</strong> {email}</p>
          </div>
          <div><button 
  onClick={() => handleBid(taskDetails._id)} 
  className="btn btn-sm bg-[#AD56C4] text-white mt-4"
>
  Bid
</button>
</div>
        </div>
      </div>
    </div>
    );
};

export default TaskDetailsCard;