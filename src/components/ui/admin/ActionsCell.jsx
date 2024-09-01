import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { BookingContext } from '../../../context/BookingContext';
import axios from 'axios';
import dayjs from 'dayjs'
import { AdminContext } from '../../../context/AdminContext';

const ActionsCell = ({ id }) => {
  const { isEditing, setIsEditing, deleteBooking, editedField, setDataChanged, setActionPerformed } = useContext(BookingContext);
  const { accessToken } = useContext(AdminContext);

  const handleEdit = async () => {
    try {
      const editPromises = editedField.map(async field => {
        const { _id: id, ...filteredBody } = field;
        const first_name =  filteredBody['first_name last_name'].split(' ')[0];
        const last_name =  filteredBody['first_name last_name'].split(' ')[1];
        const body = {
          contact_number: filteredBody.contact_number,
          first_name,
          last_name,
          reservation_date: {
            start: dayjs(filteredBody.reservation_date.split(' - ')[0]),
            end: dayjs(filteredBody.reservation_date.split(' - ')[1])
          },
          villa_resort: filteredBody.villa_resort
        }

        if(!first_name || !last_name) {
          alert('Please enter a firstname and lastname');
          return;
        }

        // if(villa_resort !== 'Villa Crisanta 1' || villa_resort  !== 'Villa Crisanta 2') {
        //   alert('Invalid Villa');
        //   return;
        // }

        const response = await fetch(`http://localhost:3500/booking/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify(body),
          credentials: 'include'
        });

        if(!response.ok) {
          const errData = await response.json();
          const errMsg = errData.message || errData.statusText;
          throw new Error(errMsg)
        };
        
        const data = await response.json();
        return data;
      })

      const responses = await Promise.all(editPromises);
      console.log('Responses', responses);
      setDataChanged(p => !p);
      setActionPerformed(p => !p);
    } catch (error) {
      console.log(error.message)
    }

  } 

  return (
    <td className='py-3 px-4'>
      <div className='flex items-center gap-3'>
        {/* Action For Viewing */}
        <i className="fa-regular fa-eye hover:text-yellow-600 duration-200"></i>

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
        <FontAwesomeIcon className='hover:text-yellow-600 duration-200' icon={faTrashCan} onClick={() => deleteBooking(id)}/>
      </div>
    </td>
  );
};

export default ActionsCell;
