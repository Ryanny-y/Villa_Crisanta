import { useContext } from "react";
import { BookingContext } from "../../../context/BookingContext";

const ConfirmationMsg = () => {
  const { showConfirmationMsg, handleConfirmation } = useContext(BookingContext)

  return (
    <>
      {showConfirmationMsg && (
        <div className="absolute bg-light flex flex-col items-center gap-5 p-5 shadow-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
          <h1 className="text-lg font-semibold">
            Are you sure you want to delete this data?
          </h1>
          <div className="flex w-1/2 items-center gap-2 justify-between">
            <button
              onClick={() => handleConfirmation(true)}
              className="bg-yellow-600 text-white hover:bg-dark duration-200 px-5 py-1"
            >
              Yes
            </button>
            <button
              onClick={() => handleConfirmation(false)}
              className="bg-yellow-600 text-white hover:bg-dark duration-200 px-5 py-1"
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfirmationMsg;
