import { createContext, useEffect, useState } from "react";
import useGetBookings from '../utils/hooks/useGetBookings';

export const BookingContext = createContext({});


const BookingProvider = ({ children }) => {

  // CONST VARIABLES
  const [ bookingData, setBookingData] = useState([]);
  const [ isEditing, setIsEditing ] = useState(false);

  const { reservationData, error, isLoading } = useGetBookings();

  // USEEFFECT FOR CHECKING THE RESERVATION DATA AND ASSIGNING THE DATE TO THE BOOKING DATA
  useEffect(() => {
    if(reservationData.length && !error && !isLoading) {
      setBookingData(reservationData);
    }
  }, [reservationData, error, isLoading])
  

  const value = {
    bookingData,
    isEditing, setIsEditing
  }

  return (
    <BookingContext.Provider value={value}>
      {bookingData.length 
        ? children 
        : <p>Loading</p>}
    </BookingContext.Provider>
  )

};

export default BookingProvider