import React from 'react';
import { useLoaderData } from 'react-router';
import TaskTable from '../Componets/TaskTable';

const BrowseTasks = () => {
    const tasks =useLoaderData()
    console.log(tasks);
    return (
<div>
<h1>Browse Task</h1>
<div className='grid grid-cols-1  gap-1.5'>

{/* table format */}
<div className="overflow-x-auto">
        <table className="table table-xs w-full">
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskTable 
              task={task} 
              key={task._id} 
              />
            ))}
          </tbody>
        </table>
      </div>
</div>
</div>
    );
};

export default BrowseTasks;