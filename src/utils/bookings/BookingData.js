import { useState, useEffect } from "react";
import useGetBookings from "../hooks/useGetBookings";

const BookingData = (dataChanged, actionPerformed) => {
  const [ origData, setOrigData ] = useState([]); 
  const [ bookingData, setBookingData] = useState([]); 
  
  const { reservationData, error, isLoading } = useGetBookings(actionPerformed); 

  // USEEFFECT FOR CHECKING THE RESERVATION DATA AND ASSIGNING THE DATE TO THE BOOKING DATA
  useEffect(() => {
    if(!error && !isLoading) {
      setBookingData(reservationData);
      setOrigData(reservationData);
    }
  }, [reservationData, error, isLoading, dataChanged]);

  return {
    origData,
    bookingData, setBookingData,
  }
}

export default BookingData