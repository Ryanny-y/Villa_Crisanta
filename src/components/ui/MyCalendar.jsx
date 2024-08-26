import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import { useState, useEffect, useRef } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useGetBookings from '../../utils/hooks/useGetBookings';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const localizer = dayjsLocalizer(dayjs);

dayjs.extend(utc)
dayjs.extend(timezone)
// plugins
const MyCalendar = ({ cleared, setFields, showCalendar, setShowCalendar }) => {

  const [ events, setEvents] = useState([]);

  const { reservationData, isLoading, error } = useGetBookings();
  const [ eventInitialized, setEventInitialized ] = useState(false);

  // CHECK IF THERE IS A RESERVATIONDATA AND ASSIGN IT INTO THE EVENTS
  useEffect(() => {
    if(reservationData.length && !isLoading && !error) {
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
      setEventInitialized(true)
    }
  }, [reservationData, isLoading, error])
  
  // HANDLE REMOVE PREFFERED DATE
  useEffect(() => {
    if(eventInitialized && !isLoading && !error) {
      // Compare the events to the database
      const reservations = reservationData.map(reservation => {
        const localStartDate = dayjs(reservation.reservation_date.start).local().toDate();
        const localEndDate = dayjs(reservation.reservation_date.end).local().add(1, 'day').toDate();

        return { start: localStartDate, end: localEndDate }
      })
      
      const filteredReservation = events.filter(event => 
        reservations.some(reservation => 
          event.start.getTime() === reservation.start.getTime() &&
          event.end.getTime() === reservation.end.getTime()
        )
      )
      
      setEvents(filteredReservation)
    }
  }, [cleared, reservationData, isLoading, error, eventInitialized])

  // DAY DAYPROPGETTER
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

  // A FUNCTION THAT CHECKS IF THE DATE WAS ALREADY RESERVED
  const isDateReserved = (start, end) => {
    return events.some(event => 
      (dayjs(start).isBefore(dayjs(event.end)) && dayjs(end).isAfter(dayjs(event.start)))
    );  
  };

  // A FUNCTION THAT CHECKS IF THE DATE IS UNAVAILABLE/PAST DATES
  const unAvailableDates = (start) => {
    return dayjs(start).isBefore(dayjs());
  }

  // HANDLE SELECT FUNCTION
  const handleSelect = ({ start, end }) => {
    if (isDateReserved(start, end)) {
      alert('The selected time range is already reserved.');
      return;
    }

    if(unAvailableDates(start)) {
      alert('Please Reserve a date in advance!');
      return;
    }
    
    // SET THE EVENTS
    setEvents(prevEvent => {
      const newEvents = [...prevEvent, { start, end, title: 'Preferred Date', allDay: true}];
      
      const preferredStartDate = newEvents.filter(event => event.title === 'Preferred Date');
      const startDate = preferredStartDate.sort((a, b) => dayjs(a.start).isBefore(dayjs(b.start)) ? -1 : 1)[0].start;
      const endDate = dayjs(preferredStartDate.sort((a, b) => dayjs(a.end).isBefore(dayjs(b.end)) ? 1 : -1)[0].end).subtract(1, 'day').toDate();
      
      setFields((prev) => ({
        ...prev,
        reservationDate: { start: startDate, end: endDate}
      }))
      
      return [...prevEvent, { start: startDate, end, title: 'Preferred Date', allDay: true}];
    });
    
    
  };

  return (
    <div className={`${showCalendar ? 'block' : 'hidden'} absolute w-full top-0 z-20 bg-white`}>
      {events.length && 
        <>
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
            
          <span onClick={() => setShowCalendar(prev => !prev)}>
            <FontAwesomeIcon 
              icon={faX} 
              className='absolute top-3 right-3 hover:text-yellow-600 duration-200' 
              />
          </span>
        </>
      }
    </div>
  );
};

export default MyCalendar;
