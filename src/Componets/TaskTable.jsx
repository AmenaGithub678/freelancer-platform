import React from 'react';
import { Link } from 'react-router';

const TaskTable = ({task}) => {
const {_id,title,category,description,deadline}=task;

    return (
<tr>
      <td className='text-sm font-semibold'>{title}</td>
      <td className='text-sm font-semibold'>{category}</td>
      <td className='text-sm font-semibold'>{description}</td>
      <td className='text-sm font-semibold'>{deadline}</td>
        <td>
<Link to={`/task-details/${_id}`}>
<button className="btn btn-outline btn-secondary">
    See Details
</button>
</Link>

      </td>
    </tr>
    );
};

export default TaskTable;