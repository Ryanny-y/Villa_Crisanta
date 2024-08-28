import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Admin_Header = () => {
  return (
    <header className="px-5 xl:px-10 2xl:px-14 flex items-center py-3 border-b border-gray-400">
      <div className="left-side flex-grow flex items-center gap-12">
        <h1 className="text-2xl font-semibold">Bookings</h1>

        <div className="flex items-center gap-2 py-1 px-5 bg-yellow-500 text-light">
          <h1 className="font-bold text-2xl">21</h1>
          <p>Total Bookings</p>
        </div>
      </div>
      

      <div className="search-bar relative justify-self-end basis-52 bg-secondaryGray px-3 py-1">
        <input type="text" className="w-full bg-transparent text-sm outline-none placeholder:text-sm" placeholder='Search...'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute top-2 right-3'/>
      </div>
    </header>
  );
};

export default Admin_Header;
