import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import FilterBtn from "./FilterBtn";
import { BookingContext } from "../../../../context/BookingContext";

const localizer = dayjsLocalizer(dayjs);

dayjs.extend(utc);
dayjs.extend(timezone);
// plugins
const FilterByDateRange = () => {
  const [events, setEvents] = useState([]);
  const [ showCalendar, setShowCalendar ] = useState(false);
  const { origData, setBookingData } = useContext(BookingContext);

  const dayPropGetter = (date) => {
    const today = dayjs().startOf("day");
    const currentDate = dayjs(date).startOf("day");
    if (currentDate.isBefore(today)) {
      return {
        className: "highlighted-day",
      };
    }
    return {};
  };

  const unAvailableDates = (start) => {
    return dayjs(start).isBefore(dayjs());
  };

  // HANDLE SELECT FUNCTION
  const handleSelect = ({ start, end }) => {
    setEvents([])
    if (unAvailableDates(start)) {
      alert("The Date is Not Available.");
      return;
    }
    
    const endDate = dayjs(end).subtract(1, 'days');
    const filteredData = origData.filter(data => 
      dayjs(data.reservation_date.start).isSameOrAfter(dayjs(start)) &&
      dayjs(data.reservation_date.end).isSameOrBefore(dayjs(endDate))
    );

    setBookingData(filteredData);
    // SET THE EVENTS
    setEvents((prevEvent) => [
      ...prevEvent,
      { start: start, end, title: "Selected", allDay: true },
    ]);
  };

  return (
    <div className={`relative top-0 z-20`}>
      <FilterBtn
        name="Select Date Range"
        icon={<i className="bx bx-calendar text-sm"></i>}
        onClick={() => setShowCalendar(true)}
      />

      {showCalendar && <div className="relative calendar-filter ">
        <Calendar
          localizer={localizer}
          defaultView="month"
          views={["month"]}
          events={events}
          startAccessor="start"
          endAccessor="end"
          className="absolute right-0 bg-light p-2"
          style={{ height: "300px", width: "300px" }}
          selectable
          onSelectSlot={handleSelect}
          dayPropGetter={dayPropGetter}
        />

        <span onClick={() => setShowCalendar(false)}>
          <FontAwesomeIcon
            icon={faX}
            className="absolute top-4 right-2 hover:text-yellow-600 duration-200"
          />
        </span>
      </div>}
    </div>
  );
};

export default FilterByDateRange;
