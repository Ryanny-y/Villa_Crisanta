import { useContext, useEffect, useRef, useState } from 'react';
import { BookingContext } from '../../../context/BookingContext';

const TableCell = ({ data, property, id }) => {
  const { isEditing, editedField, setEditedField } = useContext(BookingContext);
  const [inputValue, setInputValue] = useState(data);
  const inputRef = useRef();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const editedObject = editedField.find(field => field.id === id);

    if(editedObject) {
      editedObject[property] = value;
    } else {
      setEditedField(prev => 
        [...prev, { id, [property]: value }]
      )
    }
  };

  const handleClickEdit = () => {
    if(inputRef.current.disabled) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    } else { 
      inputRef.current.disabled = true;
    }
  }

  return (
    <td className='py-2 px-4'>
      <div className='flex items-center gap-2'>
        {!isEditing ? (
          <div>{data}</div>
        ) : (
          <div>
            <input 
              type="text" 
              value={inputValue} 
              ref={inputRef}
              disabled
              onChange={(e) => handleInputChange(e)}
            />
            <i className='bx bx-pencil text-sm md:text-base hover:text-yellow-600 duration-200' onClick={handleClickEdit}></i>
          </div>
        )}
      </div>
    </td>
  );
};

export default TableCell;
