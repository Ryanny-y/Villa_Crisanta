import { useState, useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { BookingContext } from "../../../../context/BookingContext";
import FilterBtn from "./FilterBtn";

const FilterByStatus = () => {
  const [ showStatus, setShowStatus ] = useState(false);
  const { origData, setBookingData } = useContext(BookingContext)

  const filterByStatus = (status) => {
    const filteredData = origData.filter(data => data.status === status);

    setBookingData(filteredData);
  };

  return (
    <div className="relative" onClick={() => setShowStatus((p) => !p)}>
      <FilterBtn
        name="Filter By Status"
        icon={<FontAwesomeIcon icon={faChevronDown} />}
      />

      {showStatus && (
        <div className="flex flex-col sm:flex-row absolute top-8 sm:-bottom-8 gap-2 right-0 bg-light ">
          <FilterBtn
            name="Confirmed"
            onClick={() => filterByStatus("Confirmed")}
            icon={
              <FontAwesomeIcon
                icon={faCircle}
                className="text-xs text-green-600"
              />
            }
          />
          <FilterBtn
            name="Pending"
            onClick={() => filterByStatus("Pending")}
            icon={
              <FontAwesomeIcon
                icon={faCircle}
                className="text-xs text-orange-600"
              />
            }
          />
          <FilterBtn
            name="Cancelled"
            onClick={() => filterByStatus("Cancelled")}
            icon={
              <FontAwesomeIcon
                icon={faCircle}
                className="text-xs text-red-700"
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default FilterByStatus;
