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
       <div className="min-h-screen bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] flex flex-col justify-center items-center px-6 py-12">
  {/* Header */}
  <div className="text-center max-w-3xl mb-10">
    <h1 className="text-2xl md:text-3xl font-bold text-[#AD56C4] mt-10">
      Update Task
    </h1>
    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
      Keep your task details up to date and make sure everything is correct.
      Update your information below.
    </p>
  </div>

  {/* Form Card */}
  <div className="w-full max-w-5xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl p-8 md:p-12">
    <form onSubmit={handleUpdateTask} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Task Title */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm">
        <label className="label font-semibold">Task Title</label>
        <input
          type="text"
          defaultValue={title}
          name="title"
          className="input w-full"
          placeholder="Enter Task Title"
          required
        />
      </fieldset>

      {/* Category */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm">
        <label className="label font-semibold">Category</label>
        <select
          name="category"
          defaultValue={category}
          className="select w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Web Development">Development & IT</option>
          <option value="Design">Design & Creative</option>
          <option value="Writing">Writing & Translation</option>
          <option value="Marketing">Sales & Marketing</option>
          <option value="Engineering">Engineer & Architecture</option>
          <option value="Education">Education & Consulting</option>
          <option value="Video">Video & Animation</option>
        </select>
      </fieldset>

      {/* Description */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm md:col-span-2">
        <label className="label font-semibold">Description</label>
        <textarea
          name="description"
          defaultValue={description}
          className="textarea w-full"
          rows="4"
          placeholder="What needs to be done?"
          required
        ></textarea>
      </fieldset>

      {/* Deadline */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm">
        <label className="label font-semibold">Deadline</label>
        <input
          type="date"
          name="deadline"
          defaultValue={deadline}
          className="input w-full"
          required
        />
      </fieldset>

      {/* Budget */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm">
        <label className="label font-semibold">Budget ($)</label>
        <input
          type="number"
          name="budget"
          defaultValue={budget}
          className="input w-full"
          placeholder="Enter your budget"
          required
        />
      </fieldset>

      {/* Details */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm">
        <label className="label font-semibold">Details</label>
        <input
          type="text"
          name="details"
          defaultValue={details}
          className="input w-full"
          placeholder="Enter task details"
        />
      </fieldset>

      {/* User Name */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm">
        <label className="label font-semibold">User Name</label>
        <input
          type="text"
          name="userName"
          defaultValue={userName}
          className="input w-full"
          readOnly
        />
      </fieldset>

      {/* User Email */}
      <fieldset className="fieldset bg-base-200 rounded-lg border p-4 shadow-sm">
        <label className="label font-semibold">User Email</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          className="input w-full"
          readOnly
        />
      </fieldset>
    </form>

    {/* Submit Button */}
    <div className="mt-6">
      <input
        type="submit"
        className="btn w-full bg-gradient-to-r from-[#FF8DA1] to-[#AD56C4] text-white font-bold shadow-lg hover:scale-105 transition-transform"
        value="Update Your Task"
      />
    </div>
  </div>
</div>

    );
};

export default UpadateTask;