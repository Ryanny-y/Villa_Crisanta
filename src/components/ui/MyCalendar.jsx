import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useGetBookings from '../../utils/hooks/useGetBookings';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const localizer = dayjsLocalizer(dayjs);

dayjs.extend(utc)
dayjs.extend(timezone)
// plugins
const MyCalendar = ({ setFields }) => {

  const [ events, setEvents] = useState([]);

  const { reservationData, isLoading, error } = useGetBookings();

  useEffect(() => {
    if(reservationData.length || !isLoading, !error) {
      const reservations = reservationData.map(reservation => {
        const localStartDate = dayjs(reservation.reservation_date.start).local().toDate();
        const localEndDate = dayjs(reservation.reservation_date.end).local().add(1, 'day').toDate();

        return {
          title: 'Reserved',
          start: localStartDate,
          end: localEndDate,
          allDay: true
        };
      });
      
      setEvents(reservations)
    }
  }, [reservationData, isLoading, error])
  
  const dayPropGetter = (date) => {
    const today = dayjs().startOf('day');
    const currentDate = dayjs(date).startOf('day');
    if (currentDate.isBefore(today)) {
      return {
        className: 'highlighted-day',
      };
    }
    return {};
  };

  const isDateReserved = (start, end) => {
    return events.some(event => 
      (dayjs(start).isBefore(dayjs(event.end)) && dayjs(end).isAfter(dayjs(event.start)))
    );  
  };

  const unAvailableDates = (start) => {
    return dayjs(start).isBefore(dayjs());
  }

  const handleSelect = ({ start, end }) => {
    if (isDateReserved(start, end)) {
      alert('The selected time range is already reserved.');
      return;
    }

    if(unAvailableDates(start)) {
      alert('Please Reserve a date in advance!');
      return;
    }
    
    setFields((prev) => ({
      ...prev,
      reservationDate: { start, end }
    }));

    
    setEvents([...events, { start, end, title: 'Preferred Date', allDay: true}]);
  };

  return (
    <div className='absolute w-full top-0 z-20 bg-white'>
      <Calendar
        localizer={localizer}
        defaultView='month'
        views={['month']}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '400px' }}
        selectable
        onSelectSlot={handleSelect}
        dayPropGetter={dayPropGetter}
      />
    </div>
  );
};

export default MyCalendar;
