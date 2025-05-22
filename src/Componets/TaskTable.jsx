import React from 'react';
import { Link } from 'react-router';

const TaskTable = ({task}) => {
const {_id,title,category,description,deadline}=task;

    return (
<tr>
    
      <td>{title}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{deadline}</td>
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