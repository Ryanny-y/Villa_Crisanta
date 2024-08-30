import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FilterBtn from "../../ui/admin/FilterBtn";
import { useState } from "react";

const FilterPanel = () => {
  const [ toggleFilter, setToggleFilter ] = useState(false);

  return ( 
    <section className="px-5 py-2 flex md:items-center gap-6 items-stretch text-dark text-nowrap justify-between">
      <FilterBtn name='All' icon={<FontAwesomeIcon icon={faChevronDown} className="text-sm"/>}/>

      <div className="hidden md:flex items-stretch gap-6">
        <FilterBtn name='Sort By Date' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
        <FilterBtn name='Sort By Name' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
        <FilterBtn name='Select Date Range' icon={<i className='bx bx-calendar text-sm'></i>}/>
      </div>

      <div className="block md:hidden items-stretch gap-6 relative">
        <button className="flex items-center gap-3 border border-primaryGray rounded-md px-3 py-1 hover:bg-yellow-600 hover:text-white duration-200 text-xs">Filter <i className='bx bx-filter text-sm'></i></button>

        { toggleFilter &&
          <div>
            <FilterBtn name='Sort By Date' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
            <FilterBtn name='Sort By Name' icon={<FontAwesomeIcon icon={faSort} className="text-sm"/>}/>
            <FilterBtn name='Select Date Range' icon={<i className='bx bx-calendar text-sm'></i>}/>
          </div>
        }
        
        
      </div>
      

    </section>
  )
};

export default FilterPanel;
