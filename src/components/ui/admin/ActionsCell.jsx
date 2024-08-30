import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ActionsCell = () => {
  const [ isEditing, setIsEditing ] = useState(false);

  console.log(isEditing)
  return (
    <td className='py-3 px-4'>
      <div className='flex items-center gap-3'>
        <i className="fa-regular fa-eye hover:text-yellow-600 duration-200"></i>
        {isEditing 
          ? <FontAwesomeIcon className='hover:text-yellow-600 duration-200' icon={faCheck}/>
          : <i className="fa-regular fa-pen-to-square hover:text-yellow-600 duration-200"></i>
        }
        <FontAwesomeIcon className='hover:text-yellow-600 duration-200' icon={faTrashCan}/>
      </div>
    </td>
  );
};

export default ActionsCell;
