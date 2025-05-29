import React from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import TaskTable from '../Componets/TaskTable';
import LoadingSpinner from '../Componets/LoadingSpinner';

const BrowseTasks = () => {
    const tasks =useLoaderData()

     const navigation = useNavigation();

      if (navigation.state === 'loading') {
    return <LoadingSpinner></LoadingSpinner>;  
  }
   
    return (
<div>
<h1 className='font-bold text-4xl 
text-[#AD56C4] text-center mx-auto
my-10'>Browse Task</h1>

<div className='grid grid-cols-1  gap-1.5'>

{/* table format */}
<div className="overflow-x-auto">
<table className="table w-full my-10 ">
          <thead>
            <tr className='text-[#f000b8] text-lg font-semibold'>
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