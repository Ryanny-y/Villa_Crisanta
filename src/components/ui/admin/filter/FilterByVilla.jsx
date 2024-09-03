import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BookingContext } from "../../../../context/BookingContext";
import FilterBtn from "./FilterBtn";

const FilterByVilla = () => {
  const [ showVillaFilter, setShowVillaFilter ] = useState(false);
  const { filterByResort } = useContext(BookingContext);

  return (
    <div className="mr-auto relative">
      <FilterBtn 
        name='All'
        icon={<FontAwesomeIcon icon={faChevronDown} className="text-sm"/>} 
        onClick={() => {
          filterByResort('')
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
  )
}

export default FilterByVilla