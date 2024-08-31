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
  
  // DELETE BOOKING
  const deleteBooking = async (id) => {
    const token = '';
    try {
      const response = await fetch(`http://localhost:3500/booking/${id}`, {
        method: DELETE,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
      })

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errData.statusText;
        throw new Error(errMsg);
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const value = {
    bookingData,
    isEditing, setIsEditing,
    deleteBooking
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