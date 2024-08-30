import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const TableCell = ({ children }) => {
  const [ isEditing, setIsEditing ] = useState(true);

  return (
    <td className='py-2 px-4'>
      <div className='flex items-center gap-2'>
        {children}
        {isEditing && <i className='bx bx-pencil text-sm md:text-base hover:text-yellow-600 duration-200'></i>}
      </div>
    </td>
  )
}

export default TableCell