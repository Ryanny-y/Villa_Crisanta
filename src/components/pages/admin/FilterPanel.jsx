import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faChevronDown, faRefresh } from "@fortawesome/free-solid-svg-icons";
import FilterBtn from "../../ui/admin/FilterBtn";
import { useContext, useState } from "react";
import { BookingContext } from "../../../context/BookingContext";

const FilterPanel = () => {
  const [ showFilter, setShowFilter ] = useState(false);
  const { setActionPerformed } = useContext(BookingContext);

  return ( 
    <section className="px-5 py-2 flex md:items-center gap-6 items-stretch text-dark text-nowrap justify-end">
      <div className="mr-auto">
        <FilterBtn name='All' icon={<FontAwesomeIcon icon={faChevronDown} className="text-sm"/>}/>
      </div>

      <div className="hidden md:flex items-stretch gap-6">
        <FilterBtn name='Sort By Date' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
        <FilterBtn name='Sort By Name' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
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
            <FilterBtn name='Sort By Date' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
            <FilterBtn name='Sort By Name' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
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
