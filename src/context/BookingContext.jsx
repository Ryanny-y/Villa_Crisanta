import { createContext, useContext, useEffect, useState } from "react";
import useGetBookings from '../utils/hooks/useGetBookings';
import { AdminContext } from "./AdminContext";

export const BookingContext = createContext({});


const BookingProvider = ({ children }) => {

  // CONST VARIABLES
  const { isAuthorized, accessToken } = useContext(AdminContext);
  const [ origData, setOrigData ] = useState([]);
  const [ bookingData, setBookingData] = useState([]);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ actionPerformed, setActionPerformed ] = useState(true);
  const [ dataChanged, setDataChanged ] = useState(false);

  const { reservationData, error, isLoading } = useGetBookings(actionPerformed);

  // USEEFFECT FOR CHECKING THE RESERVATION DATA AND ASSIGNING THE DATE TO THE BOOKING DATA
  useEffect(() => {
    if(!error && !isLoading) {
      setBookingData(reservationData);
      setOrigData(reservationData);
    }
  }, [reservationData, error, isLoading, dataChanged]);

  const filterByResort = (resort) => {
    const filteredData = origData.filter(data => data.villa_resort.toLowerCase().includes(resort.toLowerCase()));
    setBookingData(filteredData);
  };

  // DELETE BOOKING
  const deleteBooking = async (id) => {
    try {
      if(isAuthorized) {
        const response = await fetch(`http://localhost:3500/booking/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          credentials: 'include'
        })
  
        if(!response.ok) {
          const errData = await response.json();
          const errMsg = errData.message || errData.statusText;
          throw new Error(errMsg);
        }

        const data = await response.json();
        console.log(data);
        setActionPerformed(prev => !prev);

      } else {
        throw new Error('Unauthorized');
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const value = {
    bookingData, setBookingData,
    isEditing, setIsEditing,
    deleteBooking,
    filterByResort,
    setActionPerformed, setDataChanged
  }

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  )

};

export default BookingProvider;