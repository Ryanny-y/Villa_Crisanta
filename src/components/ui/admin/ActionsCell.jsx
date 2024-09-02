import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { BookingContext } from '../../../context/BookingContext';

const ActionsCell = ({ id }) => {
  const { isEditing, setIsEditing, setShowConfirmationMsg, setDataId, viewBookingDetail, handleEdit } = useContext(BookingContext);

  return (
    <td className='py-3 px-4'>
      <div className='flex items-center gap-3 relative'>
        {/* Action For Viewing */}
        <i className="fa-regular fa-eye hover:text-yellow-600 duration-200" onClick={() => viewBookingDetail(id)}></i>

        {/* Action For Editing */}
        {isEditing 
          ? <FontAwesomeIcon 
            className='hover:text-yellow-600 duration-200' 
            icon={faCheck} 
            onClick={() => {
            setIsEditing(false);
            handleEdit();
          }}/>
          : <i className="fa-regular fa-pen-to-square hover:text-yellow-600 duration-200"  onClick={() => setIsEditing(true)}></i>
        }
        
        {/* Action For Deleting */}
        <FontAwesomeIcon 
          className='hover:text-yellow-600 duration-200' 
          icon={faTrashCan} 
          onClick={() => {
            setShowConfirmationMsg(true)
            setDataId(id)
          }}
          />
      </div>
    </td>
  );
};

export default ActionsCell;
