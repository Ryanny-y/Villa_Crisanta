import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faChevronDown, faRefresh } from "@fortawesome/free-solid-svg-icons";
import FilterBtn from "../../ui/admin/FilterBtn";
import { useContext, useState } from "react";
import { BookingContext } from "../../../context/BookingContext";
import dayjs from 'dayjs'

const FilterPanel = () => {
  const [ showFilter, setShowFilter ] = useState(false);
  const [ showVillaFilter, setShowVillaFilter ] = useState(false);
  const { setActionPerformed, bookingData, setBookingData, setDataChanged, filterByResort } = useContext(BookingContext);

  // Handle Sort By Date
  const sortByDate = () => {
    const sortedData = bookingData.sort((a, b) => {
      const curDate = dayjs(a.reservation_date.start);
      const nextDate = dayjs(b.reservation_date.start);

      return (
        curDate.isBefore(nextDate) ? -1 
        : curDate.isAfter(nextDate) ? 1
        : 0
      );
    });

    setBookingData(sortedData);
    setDataChanged(p => !p)
  };  

  // Handle Sort By Name
  const sortByName = () => {
    const sortedData = bookingData.sort((a, b) => a.first_name.toLowerCase() < b.first_name.toLowerCase() ? -1 : a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : 0);
    setBookingData(sortedData);
    setDataChanged(p => !p)
  }

  // Handle Select Date Range

  return ( 
    <section className="px-5 py-2 flex flex-wrap md:items-center gap-6 items-stretch text-dark text-nowrap justify-end">
      <div className="mr-auto relative">
        <FilterBtn 
          name='All'
          icon={<FontAwesomeIcon icon={faChevronDown} className="text-sm"/>} 
          onClick={() => {
            filterByResort('');
            setShowVillaFilter(p => !p)
          }}
        />
        {showVillaFilter && 
          <div className="flex flex-col md:flex-row items-center absolute top-8 py-1 left-0 gap-2 bg-light rounded-sm shadow-sm">
            <FilterBtn name={'Villa Crisanta 1'} onClick={() => filterByResort('villa crisanta 1')}/>
            <FilterBtn name={'Villa Crisanta 2'} onClick={() => filterByResort('villa crisanta 2')}/>
          </div>
        }
      </div>

      <div className="hidden md:flex items-stretch gap-6">
        <FilterBtn name='Sort By Date' onClick={() => sortByDate()} icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
        <FilterBtn name='Sort By Name' onClick={() => sortByName()} icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
        <FilterBtn name='Select Date Range' icon={<i className='bx bx-calendar text-sm'></i>}/>
      </div>

      <div className="flex md:hidden items-stretch gap-6 relative">
        <button 
          className="flex items-center gap-3 border border-primaryGray rounded-md px-3 py-1 hover:bg-yellow-600 hover:text-white duration-200 text-xs"
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filter <i className='bx bx-filter text-sm'></i>
        </button>

        {showFilter &&
          <div className="absolute top-8 z-20 bg-light flex flex-col gap-2 p-2 right-0">
            <FilterBtn name='Sort By Date' onClick={() => sortByDate()} icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
            <FilterBtn name='Sort By Name' onClick={() => sortByName()} icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
            <FilterBtn name='Select Date Range' icon={<i className='bx bx-calendar text-sm'></i>}/>
          </div>
        }

      </div>

      <button className="flex items-center gap-3 border justify-between border-primaryGray rounded-md px-3 py-1 hover:bg-yellow-600 hover:text-white duration-200" onClick={() => setActionPerformed(prev => !prev)}>
        <h1 className="font-medium text-xs">Refresh</h1>
        <FontAwesomeIcon icon={faRefresh} className="text-sm"/>
      </button>
    </section>
  )
};

export default FilterPanel;
