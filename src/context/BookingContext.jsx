import { createContext, useContext, useEffect, useState } from "react";
import useGetBookings from '../utils/hooks/useGetBookings';
import { AdminContext } from "./AdminContext";
import dayjs from 'dayjs'

export const BookingContext = createContext({});


const BookingProvider = ({ children }) => {

  // CONST VARIABLES
  const { isAuthorized, accessToken } = useContext(AdminContext);
  const [ origData, setOrigData ] = useState([]);
  const [ bookingData, setBookingData] = useState([]);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ actionPerformed, setActionPerformed ] = useState(true);
  const [ dataChanged, setDataChanged ] = useState(false);
  const [ editedField, setEditedField ] = useState([]);
  const [ showConfirmationMsg, setShowConfirmationMsg ] = useState(false);
  const [ dataId, setDataId ] = useState('');

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

  const handleEdit = async () => {
    try {
      const editPromises = editedField.map(async field => {
        const { _id: id, ...filteredBody } = field;
        const first_name =  filteredBody['first_name last_name'].split(' ')[0];
        const last_name =  filteredBody['first_name last_name'].split(' ')[1];
        const body = {
          contact_number: filteredBody.contact_number,
          first_name,
          last_name,
          reservation_date: {
            start: dayjs(filteredBody.reservation_date.split(' - ')[0]),
            end: dayjs(filteredBody.reservation_date.split(' - ')[1])
          },
          villa_resort: filteredBody.villa_resort
        }

        if(!first_name || !last_name) {
          alert('Please enter a firstname and lastname');
          return;
        }

        // if(villa_resort !== 'Villa Crisanta 1' || villa_resort  !== 'Villa Crisanta 2') {
        //   alert('Invalid Villa');
        //   return;
        // }

        const response = await fetch(`https://vc-backend-72r1.onrender.com/booking/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify(body),
          credentials: 'include'
        });

        if(!response.ok) {
          const errData = await response.json();
          const errMsg = errData.message || errData.statusText;
          throw new Error(errMsg)
        };
        
        const data = await response.json();
        return data;
      })

      const responses = await Promise.all(editPromises);
      console.log('Responses', responses);
      setDataChanged(p => !p);
      setActionPerformed(p => !p);
    } catch (error) {
      console.log(error.message)
    }

  } 

  // DELETE BOOKING
  const deleteBooking = async (id) => {
    try {
      if(isAuthorized) {
        const response = await fetch(`https://vc-backend-72r1.onrender.com/booking/${id}`, {
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

  const handleConfirmation = (confirmed) => {
    if(confirmed) {
      deleteBooking(dataId)
    }
    setShowConfirmationMsg(false);
    setDataChanged('');
  }

  const value = {
    bookingData, setBookingData,
    isEditing, setIsEditing,
    editedField, setEditedField,
    handleEdit, deleteBooking,
    filterByResort,
    setActionPerformed, setDataChanged,
    showConfirmationMsg, setShowConfirmationMsg, setDataId
  }

  return (
    <BookingContext.Provider value={value}>
      {showConfirmationMsg && <div className="absolute bg-light flex flex-col items-center gap-5 p-5 shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
        <h1 className="text-lg font-semibold">Are you sure you want to delete this data?</h1>
        <div className="flex w-1/2 items-center gap-2 justify-between">
          <button onClick={() => handleConfirmation(true)} className="bg-yellow-600 text-white hover:bg-dark duration-200 px-5 py-1">Yes</button>
          <button onClick={() => handleConfirmation(false)} className="bg-yellow-600 text-white hover:bg-dark duration-200 px-5 py-1">No</button>
        </div>
      </div>}
      {children}
    </BookingContext.Provider>
  )

};

export default BookingProvider;