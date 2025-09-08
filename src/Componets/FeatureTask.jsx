import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeatureTask = () => {

    const [tasks,setTasks] = useState([]);

    useEffect(() => {
    fetch('https://my-freelancefusion-server.vercel.app/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

    return (
        <div >
 <h1 
 className='mx-auto text-center font-bold text-4xl 
 text-[#AD56C4] my-10 '>Features Task</h1>

 <div className="grid 
 grid-cols-1 
 md:grid-cols-2 
 lg:grid-cols-3 gap-4 
mx-auto px-12">
          
      {tasks.map(task => (
        <FeatureCard key={task._id} task={task} />
      ))}
    </div>
        </div>
     
    );
};

export default FeatureTask;