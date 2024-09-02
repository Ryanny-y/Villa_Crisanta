import { createContext, useEffect, useState } from "react";
import useGetBookings from '../utils/hooks/useGetBookings';
import BookingActions from "../utils/bookings/BookingActions";
import BookingData from "../utils/bookings/BookingData";

export const BookingContext = createContext({});
const BookingProvider = ({ children }) => {

  // CONST VARIABLES  
  const [ isEditing, setIsEditing ] = useState(false); 
  const [ actionPerformed, setActionPerformed ] = useState(true);
  const [ dataChanged, setDataChanged ] = useState(false); 
  const [ editedField, setEditedField ] = useState([]);
  const [ showConfirmationMsg, setShowConfirmationMsg ] = useState(false);
  const [ dataId, setDataId ] = useState('');
  const [ bookingDetails, setBookingDetails ] = useState({});
  const [ showDetails, setShowDetails ] = useState(false);

  const { origData, bookingData, setBookingData } = BookingData(dataChanged, actionPerformed);
  
  const { deleteBooking, viewBookingDetail, filterByResort, handleEdit } = BookingActions(setActionPerformed, setShowDetails, setBookingDetails, origData, setBookingData, setDataChanged, editedField);

  // HANDLE CONFIRMATION OF DELETION
  const handleConfirmation = (confirmed) => {
    if(confirmed) {
      deleteBooking(dataId)
    }
    setShowConfirmationMsg(false);
    setDataChanged('');
  };

  const value = {
    bookingData, setBookingData,
    origData,
    isEditing, setIsEditing,
    editedField, setEditedField,
    handleEdit, deleteBooking,
    filterByResort,
    setActionPerformed, setDataChanged,
    showConfirmationMsg, setShowConfirmationMsg, setDataId,
    bookingDetails, setBookingDetails,
    viewBookingDetail,
    showDetails, setShowDetails
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