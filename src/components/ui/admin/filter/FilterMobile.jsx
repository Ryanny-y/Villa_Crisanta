import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FilterBtn from "./FilterBtn";

const FilterMobile = ({ sortByDate, sortByName }) => {

  const [ showFilter, setShowFilter ] = useState(false);

  return (
    <div className="flex md:hidden gap-6 relative">
      <button
        className="flex items-center gap-3 border border-primaryGray rounded-md px-3 py-1 hover:bg-yellow-600 hover:text-white duration-200 text-xs"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        Filter <i className="bx bx-filter text-sm"></i>
      </button>

      {showFilter && (
        <div className="absolute top-8 z-20 bg-light flex flex-col gap-2 p-2 right-0">
          <FilterBtn
            name="Sort By Date"
            onClick={() => sortByDate()}
            icon={<FontAwesomeIcon icon={faSort} className="text-sm" />}
          />
          <FilterBtn
            name="Sort By Name"
            onClick={() => sortByName()}
            icon={<FontAwesomeIcon icon={faSort} className="text-sm" />}
          />
          <FilterBtn
            name="Select Date Range"
            icon={<i className="bx bx-calendar text-sm"></i>}
          />
        </div>
      )}
    </div>
  );
};

export default FilterMobile;
