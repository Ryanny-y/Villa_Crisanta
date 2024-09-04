import { createContext, useState } from "react";
import BookingActions from "../utils/bookings/BookingActions";
import BookingData from "../utils/bookings/BookingData";
import ConfirmationMsg from "../components/ui/admin/ConfirmationMsg";

export const BookingContext = createContext({});
const BookingProvider = ({ children }) => {
  // CONST VARIABLES
  const [isEditing, setIsEditing] = useState(false);
  const [actionPerformed, setActionPerformed] = useState(true);
  const [dataChanged, setDataChanged] = useState(false);
  const [editedField, setEditedField] = useState([]);
  const [showConfirmationMsg, setShowConfirmationMsg] = useState(false);
  const [dataId, setDataId] = useState("");
  const [bookingDetails, setBookingDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  const { origData, bookingData, setBookingData } = BookingData(
    dataChanged,
    actionPerformed
  );

  const { deleteBooking, viewBookingDetail, filterByResort, handleEdit, showMsgAction } =
    BookingActions(
      setActionPerformed,
      setShowDetails,
      setBookingDetails,
      origData,
      setBookingData,
      setDataChanged,
      editedField,
      setEditedField,
      setActionMessage
    );

  // HANDLE CONFIRMATION OF DELETION
  const handleConfirmation = (confirmed) => {
    if (confirmed) {
      deleteBooking(dataId);
    }
    setShowConfirmationMsg(false);
    setDataChanged("");
  };

  const value = {
    bookingData,
    setBookingData,
    origData,
    isEditing,
    setIsEditing,
    editedField,
    setEditedField,
    handleEdit,
    deleteBooking,
    filterByResort,
    handleConfirmation,
    setActionPerformed,
    setDataChanged,
    showConfirmationMsg,
    setShowConfirmationMsg,
    setDataId,
    bookingDetails,
    setBookingDetails,
    viewBookingDetail,
    showDetails,
    setShowDetails, showMsgAction
  };

  return (
    <BookingContext.Provider value={value}>
      {actionMessage && (
        <div className="absolute bg-light flex flex-col items-center gap-5 p-5 shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          <h1 className="text-lg font-semibold">
            {actionMessage}
          </h1>
        </div>
      )}
      <ConfirmationMsg />
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
