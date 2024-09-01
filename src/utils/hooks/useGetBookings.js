import { useState, useEffect } from "react";

const useGetBookings = (actionPerformed = false) => {

  const [ reservationData, setReservationData ] = useState([]);
  const [ error, setError ] = useState(null);
  const [ isLoading ,setIsLoading ] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const getBookings = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://vc-backend-72r1.onrender.com/booking', { signal: controller.signal });
      
        if(!response.ok) {
          const errData = response.json('');
          const errMsg = errData.message;
          throw new Error(errMsg);
        }
        const data = await response.json('');
        setReservationData(data);
        setError(null);
      } catch (error) {
        setReservationData([]);
        setError(error.message)
        console.error(error.message)
      } finally {
        setIsLoading(false);
      }
    }

    getBookings();

    return () => {
      controller.abort();
    }
  }, [actionPerformed])

  return { reservationData, error, isLoading }
  
};

export default useGetBookings;