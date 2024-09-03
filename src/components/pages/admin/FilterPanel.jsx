import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort, faRefresh } from "@fortawesome/free-solid-svg-icons";
import FilterBtn from "../../ui/admin/filter/FilterBtn";
import { useContext } from "react";
import { BookingContext } from "../../../context/BookingContext";
import dayjs from "dayjs";
import FilterByVilla from "../../ui/admin/filter/FilterByVilla";
import FilterMobile from "../../ui/admin/filter/FilterMobile";
import FilterByStatus from "../../ui/admin/filter/FilterByStatus";

const FilterPanel = () => {
  const { setActionPerformed, bookingData, setBookingData, setDataChanged } =
    useContext(BookingContext);

  // Handle Sort By Date
  const sortByDate = () => {
    const sortedData = bookingData.sort((a, b) => {
      const curDate = dayjs(a.reservation_date.start);
      const nextDate = dayjs(b.reservation_date.start);

      return curDate.isBefore(nextDate)
        ? -1
        : curDate.isAfter(nextDate)
        ? 1
        : 0;
    });

    setBookingData(sortedData);
    setDataChanged((p) => !p);
  };

  // Handle Sort By Name
  const sortByName = () => {
    const sortedData = bookingData.sort((a, b) =>
      a.first_name.toLowerCase() < b.first_name.toLowerCase()
        ? -1
        : a.first_name.toLowerCase() > b.first_name.toLowerCase()
        ? 1
        : 0
    );
    setBookingData(sortedData);
    setDataChanged((p) => !p);
  };

  // Handle Select Date Range

  return (
    <section className="px-5 py-2 flex flex-wrap gap-6 items-stretch text-dark text-nowrap justify-end">
      {/* ALL */}
      <FilterByVilla />

      <div className="hidden md:flex grow justify-end gap-6">
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

      <FilterMobile sortByDate={sortByDate} sortByName={sortByName} />

      <FilterByStatus />

      <div>
        <FilterBtn
          name="Refresh"
          icon={<FontAwesomeIcon icon={faRefresh} className="text-xs" />}
          onClick={() => setActionPerformed((prev) => !prev)}
        />
      </div>
    </section>
  );
};

export default FilterPanel;
