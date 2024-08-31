import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { BookingContext } from '../../../context/BookingContext';

const Admin_Header = () => {
  const { bookingData } = useContext(BookingContext);

  return (
    <header className="px-5 xl:px-10 2xl:px-14 flex items-center py-3 gap-2 border-b border-gray-400 flex-wrap">
      <div className="left-side flex-grow flex items-center gap-2 sm:gap-5 flex-wrap">
        <h1 className="text-2xl font-semibold">Bookings</h1>

        <div className="flex items-center gap-2 py-1 px-5 bg-yellow-600 rounded-md text-light text-nowrap">
          <h1 className="font-bold text-2xl">{bookingData.length || 0}</h1>
          <p>Total Bookings</p>
        </div>
      </div>
      

      <div className="search-bar relative justify-self-end basis-60 rounded-md bg-secondaryGray px-3 py-1 grow">
        <input type="text" className="w-full bg-transparent text-sm outline-none rounded-sm` placeholder:text-sm" placeholder='Search...'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute top-2 right-3'/>
      </div>
    </header>
  );
};

export default Admin_Header;
