import React from 'react';

const PostTaskCard = ({ task, onUpdate, onDelete, onViewBids }) => {
    const { _id, title, category, deadline, budget, bid = 0 } = task;
    return (
         <div className="card bg-base-100 shadow-sm border border-gray-200 px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="text-sm text-warning">Deadline: {deadline}</p>
        </div>
        <div className="text-lg font-semibold text-primary">${budget}</div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-4">
        <button
          className="btn btn-sm btn-outline btn-primary"
          onClick={() => onUpdate(_id)}
        >
          Update
        </button>
        <button
          className="btn btn-sm btn-outline btn-error"
          onClick={() => onDelete(_id)}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-outline btn-info"
          onClick={() => onViewBids(_id)}
        >
          Bids: {bid}
        </button>
      </div>
    </div>
    );
};

export default PostTaskCard;