import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import TaskTable from '../Componets/TaskTable';
import LoadingSpinner from '../Componets/LoadingSpinner';
import { motion } from "framer-motion";

const BrowseTasks = () => {
  const tasks = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === 'loading') {
    return <LoadingSpinner />;
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] ">
  <h1 className="font-bold text-3xl md:text-4xl text-[#AD56C4] text-center mx-auto mt-20 mb-5">
    Browse Task
  </h1>

  {/* ✅ Mobile: Card Layout */}
  <div className="sm:hidden space-y-4 my-5">
    {tasks.map(task => (
      <TaskTable task={task} key={task._id} isCard />
    ))}
  </div>

  {/* ✅ Desktop: Table Layout */}
  <div className="hidden sm:block overflow-x-auto">
    <table className="table w-full my-10 border">
      <thead>
        <tr className="text-[#f000b8] text-lg font-semibold">
          <th>Task Title</th>
          <th>Category</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskTable task={task} key={task._id} />
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default BrowseTasks;
