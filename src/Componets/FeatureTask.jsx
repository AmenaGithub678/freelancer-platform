import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeatureTask = () => {

    const [tasks,setTasks] = useState([]);

    useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

    return (
        <div>
 <h1>Features Task</h1>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
      {tasks.map(task => (
        <FeatureCard key={task._id} task={task} />
      ))}
    </div>
        </div>
     
    );
};

export default FeatureTask;