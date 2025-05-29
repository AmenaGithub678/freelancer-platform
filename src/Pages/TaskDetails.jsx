import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router';
import TaskDetailsCard from '../Componets/TaskDetailsCard';
import LoadingSpinner from '../Componets/LoadingSpinner';

const TaskDetails = () => {
    const data = useLoaderData()

     const navigation = useNavigation();

    console.log(data);
    const {id} =useParams();

    const [taskDetails,settaskDetails] =useState({})

    useEffect(()=>{
        const taskDetails = data.find(oneTask=> oneTask._id == id);
        settaskDetails(taskDetails)  
    },[data,id])



const handleBid = async (taskId) => {
  try {
    const res = await fetch(`https://my-freelancefusion-server.vercel.app/tasks/${taskId}/bid`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (data.modifiedCount > 0) {
      // fetch updated data again
      const updated = data => data._id === taskId;
      const newDetails = data.find(updated);
      settaskDetails({ ...newDetails, bid: newDetails.bid + 1 });
    }
  } catch (error) {
    console.error('Error updating bid:', error);
  }
};

 if (navigation.state === 'loading') {
    return <LoadingSpinner></LoadingSpinner>;
  }

    return (
        <div>
 <h1 className='text-2xl text-[#AD56C4] text-center font-bold
            my-10  '>Want To Know About More! Welcome to task details page</h1>
<div >
 <TaskDetailsCard taskDetails={taskDetails}
 handleBid={handleBid}></TaskDetailsCard>
</div>
           
        </div>
    );
};

export default TaskDetails;