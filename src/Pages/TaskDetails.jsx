import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import TaskDetailsCard from '../Componets/TaskDetailsCard';

const TaskDetails = () => {
    const data = useLoaderData()
    console.log(data);
    const {id} =useParams();

    const [taskDetails,settaskDetails] =useState({})

    useEffect(()=>{
        const taskDetails = data.find(oneTask=> oneTask._id == id);
        settaskDetails(taskDetails)  
    },[data,id])

    return (
        <div>
            <h1>This is task details page</h1>
<div >
 <TaskDetailsCard taskDetails={taskDetails}></TaskDetailsCard>
</div>
           
        </div>
    );
};

export default TaskDetails;