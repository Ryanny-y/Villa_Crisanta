import { useRef, useContext } from 'react';
import { BookingContext } from '../../../context/BookingContext';

const TableCell = ({ data, id }) => {
  const { isEditing } = useContext(BookingContext)

  return (
    <td className='py-2 px-4'>
      <div className='flex items-center gap-2'>
        <div>{data}</div>

        {isEditing && <i className='bx bx-pencil text-sm md:text-base hover:text-yellow-600 duration-200'></i>}
      </div>
    </td>
  )
}

export default TableCell