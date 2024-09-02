import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../../../context/BookingContext";

const StatusCell = ({ status, property, id }) => {
  const [statusColor, setStatusColor] = useState(changeStatusColor(status));
  const [statusValue, setStatusValue] = useState(status);

  useEffect(() => {
    setStatusColor(changeStatusColor(statusValue));
  }, [statusValue, status]);

  const { isEditing, editedField, setEditedField } = useContext(BookingContext);

  const [ statusEditing, setStatusEditing ] = useState(false);

  const handleChangeStatus = (statusParam) => {
    setStatusValue(statusParam);

    const editedObject = editedField.find(field => field.id === id);

    if(editedObject) {
      editedObject[property] = statusParam;
    } else {
      setEditedField(prev => 
        [...prev, { id, [property]: statusParam }]
      )
    };
    setStatusEditing(prev => false);
  }

  function changeStatusColor(status) {
    return status === "Confirmed"
    ? "bg-green-600"
    : status === "Pending"
    ? "bg-orange-600"
    : "bg-red-600";
  }

  const handleClickEdit = () => {
    setStatusEditing(prev => !prev);
  };

  return (
    <td className="py-3 px-4 flex items-center gap-2">
      {!isEditing && <div className="border text-xs md:text-base  border-gray-400 rounded-full inline-flex items-center gap-2 px-3 py-1">
        <div className={`h-2 w-2 ${statusColor} rounded-full`}></div>
        <p>{statusValue}</p>
      </div>}

      {isEditing && (
        <div className={`flex items-center gap-2 relative ${statusEditing ? 'overflow-visible' : 'overflow-hidden'}`}>
          <div className={`border text-xs md:text-sm ${statusEditing ? 'opacity-0': 'opacity-1'} border-gray-400 rounded-full inline-flex items-center gap-2 w-28 px-2 py-1`}>
            <div className={`h-2 w-2 ${statusColor} rounded-full`}></div>
            <p>{statusValue}</p>
          </div>
          
          {statusEditing && 
          <div className="absolute right-8 flex flex-col justify-start gap-1 items-start text-sm bg-light">
            <button className="bg-transparent w-full flex items-center gap-2 text-start pl-2 pr-4 py-0.5 rounded-full border border-primaryGray bg-light" onClick={() => handleChangeStatus('Confirmed')}>
              <span className="h-2 w-2 rounded-full bg-green-600"></span>
              <span>Confirmed</span>
            </button>

            <button className="bg-transparent w-full flex items-center gap-2 text-start pl-2 pr-4 py-0.5 rounded-full border border-primaryGray bg-light" onClick={() => handleChangeStatus('Pending')}>
              <span className="h-2 w-2 rounded-full bg-orange-600"></span>
              <span>Pending</span>
            </button>

            <button className="bg-transparent w-full flex items-center gap-2 text-start pl-2 pr-4 py-0.5 rounded-full border border-primaryGray bg-light" onClick={() => handleChangeStatus('Cancelled')}>
              <span className="h-2 w-2 rounded-full bg-red-600"></span>
              <span>Cancelled</span>
            </button>        
          </div>}
          

          <i className="bx bx-pencil text-sm md:text-base hover:text-yellow-600 duration-200" onClick={handleClickEdit}></i>
        </div>
      )}
    </td>
  );
};

export default StatusCell;