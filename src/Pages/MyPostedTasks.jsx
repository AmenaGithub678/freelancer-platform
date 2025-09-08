import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import PostTaskCard from '../Componets/PostTaskCard';
const MyPostedTasks = () => {
const { user } = use(AuthContext);
    const [tasks, setTasks] = useState([]);

 useEffect(() => {
  fetch(`https://my-freelancefusion-server.vercel.app/task/${user?.email}`)
    .then(res => res.json())
    .then(data => setTasks(data));
}, [user]);
console.log(tasks);
const handleUpdate = (task) => {
  console.log('Update task with ID:', id);
  
  };

  const handleDelete = (id) => {
    console.log('Delete task with ID:', id);
    // Add delete logic here
  };

  const handleViewBids = (id) => {
    console.log('View bids for task ID:', id);
    // Show modal 
  };
    return (
<div className="my-10
 lg:my-20 mx-auto px-4 py-6 ">
      <h1 className="text-lg lg:text-3xl text-[#AD56C4] text-center my-5 font-bold">My Posted Tasks</h1>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks posted yet.</p>
      ) : (
        <div className="space-y-6">
          {tasks.map(task => (
            <PostTaskCard
              key={task._id}
              task={task}
              onUpdate={() => handleUpdate(task)} 
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