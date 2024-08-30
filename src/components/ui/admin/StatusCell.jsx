import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const StatusCell = ({ status }) => {
  const statusColor = status === 'Active' ? 'bg-green-600' : status === 'Pending' ? 'bg-orange-600' : 'bg-red-600';
  const [ isEditing, setIsEditing ] = useState(true);

  return (
    <td className='py-3 px-4 flex items-center gap-2'>
      <div className="border border-gray-400 rounded-full inline-flex items-center gap-2 px-3 py-1"> 
        <div className={`h-2 w-2 ${statusColor} rounded-full`}></div>
        <p className="text-xs md:text-sm">{status}</p>
      </div>
      {isEditing && <i className='bx bx-pencil text-sm md:text-base hover:text-yellow-600 duration-200'></i>}
    </td>
  )
}

export default StatusCell