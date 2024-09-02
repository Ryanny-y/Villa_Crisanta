import { createContext, useEffect, useState } from "react";
import useGetBookings from '../utils/hooks/useGetBookings';
import BookingActions from "../utils/bookings/BookingActions";
import BookingData from "../utils/bookings/BookingData";
import ConfirmationMsg from "../components/ui/admin/ConfirmationMsg";

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
  
  const { deleteBooking, viewBookingDetail, filterByResort, handleEdit } = BookingActions(setActionPerformed, setShowDetails, setBookingDetails, origData, setBookingData, setDataChanged, editedField, setEditedField);

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
    filterByResort, handleConfirmation,
    setActionPerformed, setDataChanged,
    showConfirmationMsg, setShowConfirmationMsg, setDataId,
    bookingDetails, setBookingDetails,
    viewBookingDetail,
    showDetails, setShowDetails
  }

  return (
    <BookingContext.Provider value={value}>
      <ConfirmationMsg />
      {children}
    </BookingContext.Provider>
  )

};

export default BookingProvider;