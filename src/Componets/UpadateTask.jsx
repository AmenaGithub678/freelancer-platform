import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpadateTask = () => {
const {_id,title,category,description,deadline,budget,details,userName,email} = useLoaderData();


    const  handleUpdateTask = e =>{
         e.preventDefault();
         const form = e.target;
        const formData = new FormData(form);
        const updatedTask = Object.fromEntries(formData.entries())
        console.log(updatedTask);

        // send updated task to the database
       fetch(`https://my-freelancefusion-server.vercel.app/tasks/${_id}`, {
  method: "PUT",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedTask),
})
  .then(res => res.json())
.then(data => {
  if (data.modifiedCount) {
    Swal.fire({
      icon: "success",
      position: "top-end",
      title: "Task updated successfully.",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    Swal.fire({
      icon: "info",
      title: "No changes made.",
      showConfirmButton: false,
      timer: 1500
    });
  }
})

    }
    return (
        <div>
<div className='p-24 bg-[#FF8DA1]'>
  <div 
  className='p-12 text-center space-y-4'>
    <h1 className="text-6xl text-[#AD56C4]">
     Update task</h1>
    <p className='text-white font-semibold'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
    </div>  

{/* form design */}

<form action="" 
onSubmit={handleUpdateTask}>
<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
   <label className="label">
   Task Title</label>
    <input type="text" 
    defaultValue={title}
    name='title'  
    className="input w-full" placeholder="Enter Task Title" 
    required/>
</fieldset>
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
    <label className="label">Category</label>
      <select 
      name="category" 
       defaultValue={category}
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
   name="description"
     defaultValue={description} className="textarea w-full" 
   rows="4" 
   placeholder="What needs to be done?" required>
   </textarea>
    </fieldset>

   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4"> 
  
      <label className="label">Deadline</label>
      <input type="date" name="deadline"
         defaultValue={deadline} 
      className="input w-full" required />
    </fieldset>
 
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Budget ($)</label> 
  <input type="number" 
  name="budget"
  defaultValue={budget} 
  className="input w-full" placeholder="Enter your budget" required /> 
    </fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

   <label className="label">Details</label>
    <input type="text" name='details'
     defaultValue={details}  
    className="input w-full" placeholder="Details Name" />
    </fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4"> 
      <label className="label">User Name</label>
     <input
  type="text"
  name="userName"
  defaultValue={userName} 
  className="input w-full"
  readOnly
/>
    </fieldset>
 
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4"> 
      <label className="label">User Email</label>
      <input type="email" name="email"
       defaultValue={email}
        className="input w-full"  readOnly />
    </fieldset>
    </div>
     <input type="submit" 
     className='btn w-full mt-2' 
     value="Update Your Info" />

      </form>
        </div>

        </div>
    );
};

export default UpadateTask;