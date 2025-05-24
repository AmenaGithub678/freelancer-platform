import React from 'react';
import Swal from 'sweetalert2';
const AddTask = () => {
  const handleAddTask = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

         const newTask = {
    ...Object.fromEntries(formData.entries()),//copy data 
    bid: 0
  };

  console.log(newTask);

//server db method add
fetch('http://localhost:5000/tasks',{
       method: "POST",
       headers:{
           "Content-Type": "application/json",
       },
       body: JSON.stringify(newTask)
         })
         .then(res=>res.json())
         .then(data=>{
              console.log('data after db', data);
              if(data.insertedId){
              console.log('added successfully');
 Swal.fire({
  title: "Task Added Successfully !",
  icon: "success",
  draggable: true
              });
    }
    }
        ) 
    }

    return (
<div className='p-24 bg-[#FF8DA1]'>
  <div 
  className='p-12 text-center space-y-4'>
    <h1 className="text-6xl text-[#AD56C4]">
        Add a New Task</h1>
    <p className='text-white font-semibold'>Use this form to post a new task and connect with skilled professionals who can help you get the job done. Provide clear and detailed information about your task, including the category, description, deadline, and budget. Once submitted, your task will be listed publicly and available for users to view and place bids on. Make sure your information is accurate to attract the right talent!</p>
    </div>  

{/* form design */}

<form action="" 
onSubmit={handleAddTask}>
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
   <label className="label">
   Task Title</label>
    <input type="text" 
    name='title'  
    className="input w-full" placeholder="Enter Task Title" 
    required/>
</fieldset>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Category</label>
      <select 
      name="category" 
      className="select w-full" required>
        <option value="">
            Select Category
        </option>
        <option value="Web Development">
            Development & IT
        </option>
        <option value="Design">
            Design & Creative
        </option>
        <option value="Writing">
            Writing & Translation
        </option>
        <option value="Marketing">
           Sales & Marketing
        </option>
         <option value="Marketing">
           Engineer & Architecture
        </option>
         <option value="Marketing">
          Education & Consulting
        </option>
        <option value="Marketing">
          Video & Animation
        </option>
      </select>
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">
        Description
    </label>
   <textarea 
   name="description" className="textarea w-full" 
   rows="4" 
   placeholder="What needs to be done?" required>
   </textarea>
    </fieldset>

   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4"> 
  
      <label className="label">Deadline</label>
      <input type="date" name="deadline" className="input w-full" required />
    </fieldset>
 
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Budget ($)</label> 
  <input type="number" name="budget" className="input w-full" placeholder="Enter your budget" required /> 
    </fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

   <label className="label">Details</label>
    <input type="text" name='details' className="input w-full" placeholder="Details Name" />
    </fieldset>

     {/* <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border my-6 p-4">
    <label className="label">Photo</label>
    <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
</fieldset> */}

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4"> 
      <label className="label">User Name</label>
      <input type="text" name="userName" className="input w-full" value="John Doe" readOnly />
    </fieldset>
 
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4"> 
      <label className="label">User Email</label>
      <input type="email" name="email" className="input w-full" value="user@example.com" readOnly />
    </fieldset>
    </div>
     <input type="submit" 
     className='btn w-full mt-2' 
     value="Add Button" />

      </form>
        </div>
    );
};

export default AddTask;