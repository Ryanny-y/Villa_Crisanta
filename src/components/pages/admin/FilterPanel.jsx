import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FilterBtn from "../../ui/admin/FilterBtn";
// import boxIcon from 'boxicons'

const FilterPanel = () => {
  return ( 
    <section className="px-5 py-2 flex items-center gap-6 text-dark">
      <FilterBtn name='All' icon={<FontAwesomeIcon icon={faChevronDown} className="text-sm"/>}/>

      <FilterBtn name='Sort By Date' icon={<FontAwesomeIcon icon={faSort}/>}/>
      <FilterBtn name='Sort By Name' icon={<FontAwesomeIcon icon={faSort}/>}/>
      <FilterBtn name='Select Date Range' icon={<i className='bx bx-calendar text-lg'></i>}/>
      
    </section>
  )
};

export default FilterPanel;
