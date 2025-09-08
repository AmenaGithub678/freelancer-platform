import { Link } from "react-router";
import { motion } from "framer-motion";
const TaskTable = ({ task, isCard }) => {
  const { _id, title, category, description, deadline } = task;

  if (isCard) {
    return (
      <motion.div className="bg-white rounded-xl shadow-md p-5 border hover:shadow-xl transition-all duration-300">
        <h2 className="text-lg font-bold text-[#f000b8] mb-2">{title}</h2>
        <p className="text-sm"><span className="font-semibold">Category:</span> {category}</p>
        <p className="text-sm"><span className="font-semibold">Description:</span> {description}</p>
        <p className="text-sm mb-3"><span className="font-semibold">Deadline:</span> {deadline}</p>
        <Link to={`/task-details/${_id}`}>
          <button className="px-4 py-2 rounded-lg bg-[#AD56C4] text-white text-sm hover:bg-[#f000b8] transition">
            See Details
          </button>
        </Link>
      </motion.div>
    );
  }

  // ✅ Table row layout
  return (
    <tr>
      <td className="text-sm font-semibold">{title}</td>
      <td className="text-sm font-semibold">{category}</td>
      <td className="text-sm font-semibold">{description}</td>
      <td className="text-sm font-semibold">{deadline}</td>
      <td>
        <Link to={`/task-details/${_id}`}>
          <button className="btn btn-outline btn-secondary btn-sm">See Details</button>
        </Link>
      </td>
    </tr>
  );
};
export default TaskTable; 
