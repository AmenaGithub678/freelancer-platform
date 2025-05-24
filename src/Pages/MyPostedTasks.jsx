import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import PostTaskCard from '../Componets/PostTaskCard';

const MyPostedTasks = () => {
const { user } = use(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
  fetch(`http://localhost:5000/tasks?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setTasks(data));
}, [user]);
const handleUpdate = (id) => {
    console.log('Update task with ID:', id);
    // Navigate to update page or open modal
  };

  const handleDelete = (id) => {
    console.log('Delete task with ID:', id);
    // Add delete logic here
  };

  const handleViewBids = (id) => {
    console.log('View bids for task ID:', id);
    // Show modal or navigate to bid details page
  };

    return (
<div 
className="max-w-5xl 
mx-auto px-4 
py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">My Posted Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks posted yet.</p>
      ) : (
        <div className="space-y-6">
          {tasks.map(task => (
            <PostTaskCard
              key={task._id}
              task={task}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
              onViewBids={handleViewBids}
            />
          ))}
        </div>
      )}
    </div>
    );
};

export default MyPostedTasks;