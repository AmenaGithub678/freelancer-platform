import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/AuthContext';
import { RiFileAddLine } from "react-icons/ri";

const AddTask = () => {
  const {user} = use(AuthContext);
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
fetch('https://my-freelancefusion-server.vercel.app/tasks',{
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
<div className="min-h-screen bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] flex items-center justify-center px-4 py-12">
  <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 md:p-12">
    
    {/* Header */}
    <div className="text-center space-y-3 mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-[#AD56C4]">
        Add a New Task
      </h1>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
        Post a task and connect with skilled professionals. Provide clear details 
        about the category, description, deadline, and budget so the right people 
        can bid and help you successfully complete it.
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleAddTask} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Task Title */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Task Title</label>
        <input 
          type="text" 
          name="title"  
          className="input input-bordered w-full"
          placeholder="e.g. Build a portfolio website" 
          required 
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Category</label>
        <select name="category" className="select select-bordered w-full" required>
          <option value="">Select Category</option>
          <option value="Web Development">Development & IT</option>
          <option value="Design">Design & Creative</option>
          <option value="Writing">Writing & Translation</option>
          <option value="Marketing">Sales & Marketing</option>
          <option value="Engineering">Engineering & Architecture</option>
          <option value="Education">Education & Consulting</option>
          <option value="Video">Video & Animation</option>
        </select>
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold mb-1 text-gray-700">Description</label>
        <textarea 
          name="description" 
          className="textarea textarea-bordered w-full" 
          rows="4" 
          placeholder="Clearly explain what needs to be done"
          required
        />
      </div>

      {/* Deadline */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Deadline</label>
        <input type="date" name="deadline" className="input input-bordered w-full" required />
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Budget ($)</label>
        <input 
          type="number" 
          name="budget" 
          className="input input-bordered w-full" 
          placeholder="e.g. 200"
          required 
        />
      </div>

      {/* Details */}
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold mb-1 text-gray-700">Extra Details</label>
        <input 
          type="text" 
          name="details" 
          className="input input-bordered w-full" 
          placeholder="Optional: tools, resources, or requirements" 
        />
      </div>

      {/* User Info */}
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Your Name</label>
        <input 
          type="text" 
          name="userName" 
          className="input input-bordered w-full" 
          value={user?.displayName} 
          readOnly 
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1 text-gray-700">Your Email</label>
        <input 
          type="email" 
          name="email" 
          className="input input-bordered w-full" 
          value={user?.email} 
          readOnly 
        />
      </div>

      {/* Submit Button */}
      <div className="md:col-span-2 mt-4">
        <button type="submit" className="
         btn bg-[#AD56C4] hover:bg-[#f000b8] w-full text-white text-lg">
          <RiFileAddLine /> Add Task
        </button>
      </div>
    </form>

    {/* Extra Note */}
    <div className="mt-6 text-center text-sm text-gray-500">
      <p>💡 Tip: The clearer your task description, the better bids you’ll receive!</p>
    </div>
  </div>
</div>

    );
};

export default AddTask;