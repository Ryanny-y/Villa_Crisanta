import { useContext, useEffect, useState } from 'react';
import { BookingContext } from '../../../context/BookingContext';

const TableCell = ({ data, property, id }) => {
  const { isEditing, setEditedField } = useContext(BookingContext);
  const [inputValue, setInputValue] = useState(data);

  useEffect(() => {
    setEditedField(prevField => {
      const matchingField = prevField.find(field => field._id === id);

      if (matchingField) {
        return prevField.map(field => {
          if (field._id === id) {
            return { ...field, [property]: data };
          }
          return field;
        });
      } else {
        return [...prevField, { _id: id, [property]: data }];
      }
    });
  }, [id, data, property, setEditedField]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setEditedField(prevField => {
      const matchingField = prevField.find(field => field._id === id);

      if (matchingField) {
        return prevField.map(field => {
          if (field._id === id) {
            return { ...field, [property]: e.target.value };
          }
          return field;
        });
      } else {
        return [...prevField, { _id: id, [property]: e.target.value }];
      }
    });
  };

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
              onChange={handleInputChange}
            />
            <i className='bx bx-pencil text-sm md:text-base hover:text-yellow-600 duration-200'></i>
          </div>
        )}
      </div>
    </td>
  );
};

export default TableCell;
