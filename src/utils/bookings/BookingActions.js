import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import dayjs from "dayjs";

const BookingActions = (
  setActionPerformed,
  setShowDetails,
  setBookingDetails,
  origData,
  setBookingData,
  setDataChanged,
  editedField,
  setEditedField
) => {
  const { isAuthorized, accessToken } = useContext(AdminContext);

  // HANDLE EDIT BOOKING
  const handleEdit = async () => {
    try {
      const editedPromises = editedField.map(async (field) => {
        const { id, ...filteredField } = field;
        const [first_name, last_name] = (
          filteredField?.["first_name last_name"] || ""
        ).split(" ");

        const body = {
          contact_number: filteredField?.contact_number || undefined,
          first_name: first_name || undefined,
          last_name: last_name || undefined,
          status: filteredField?.status || undefined,
          reservation_date: filteredField?.reservation_date
            ? {
                start: dayjs(filteredField.reservation_date.split(" - ")[0]),
                end: dayjs(filteredField.reservation_date.split(" - ")[1]),
              }
            : undefined,
          villa_resort: filteredField?.villa_resort || undefined,
        };

        const filteredBody = Object.fromEntries(
          Object.entries(body).filter(([key, value]) => value !== undefined)
        );

        const response = await fetch(`https://vc-backend-72r1.onrender.com/booking/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          },
          body: JSON.stringify(filteredBody),
          credentials: 'include'
        });

        if (!response.ok) {
          const errorData = await response.json();
          const errMsg = errorData.message || errorData.statusText || 'Unknown error occurred';
          throw new Error(errMsg);
        }        

        console.log(filteredBody);
        const data = await response.json();
        return data;
        
      });

      await Promise.all(editedPromises);
      setDataChanged(p => !p);
      setActionPerformed(p => !p);
      setEditedField([])
    } catch (error) {
      alert(error.message)
    }
  };

  // HANDLE DELETE BOOKING
  const deleteBooking = async (id) => {
    try {
      if (isAuthorized) {
        const response = await fetch(
          `https://vc-backend-72r1.onrender.com/booking/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            credentials: "include",
          }
        );

        if (!response.ok) {
          const errData = await response.json();
          const errMsg = errData.message || errData.statusText;
          throw new Error(errMsg);
        }

        const data = await response.json();
        console.log(data);
        setActionPerformed((prev) => !prev);
      } else {
        throw new Error("Unauthorized");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // HANDLE VIEW BOOKING DETAILS
  const viewBookingDetail = async (id) => {
    const matchingBooking = origData.find((data) => data._id === id);

    if (!matchingBooking) {
      alert("Bookiong Not Found!");
      return;
    }

    setBookingDetails(matchingBooking);
    setShowDetails(true);
  };

  // HANDLE FILTER BY RESORT
  const filterByResort = (resort) => {
    const filteredData = origData.filter((data) =>
      data.villa_resort.toLowerCase().includes(resort.toLowerCase())
    );
    setBookingData(filteredData);
  };

  return {
    deleteBooking,
    viewBookingDetail,
    filterByResort,
    handleEdit,
  };
};

export default BookingActions;
