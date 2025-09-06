import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const PostTaskCard = ({ task, onViewBids }) => {
    const { _id, title, category, deadline, budget, bid = 0 } = task;
    const handleDelete =(_id) =>{
      console.log(_id);

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
console.log(result.isConfirmed);

 if (result.isConfirmed) {
  
    // start deleting method
    fetch(`https://my-freelancefusion-server.vercel.app/tasks/${_id}`,{
    method: "DELETE"
    }).then(res=>res.json())
    .then(data=>{
  //  console.log('after delete',data);
  if(data.deletedCount){
  Swal.fire({
       title: "Deleted!",
       text: "Selected Task has been deleted!",
       icon: "success"
     });


    // //  remove coffee in ui
    // const remainingTasks = tasks.filter(cof=> cof._id !== _id);
    // setCoffees(remainingCoffes);
  }
    })
  }
});

    }
    return (
         <div className="card bg-base-100 shadow-sm border border-gray-200 px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="text-sm text-warning">Deadline: {deadline}</p>
        </div>
        <div className="text-lg font-semibold text-primary">${budget}</div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-4">
        <Link to={`/updateTask/${_id}`}>
         <button
          className="btn btn-sm btn-outline btn-primary"
        >
          Update
        </button>
        </Link>
       

        <button
          className="btn btn-sm btn-outline btn-error"
         onClick={()=>handleDelete(_id)}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-outline btn-info"
          onClick={() => onViewBids(_id)}
        >
          Bids: {bid}
        </button>
      </div>
    </div>
    );
};

export default PostTaskCard;