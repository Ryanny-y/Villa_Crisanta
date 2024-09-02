import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import dayjs from 'dayjs'


const BookingActions = (setActionPerformed, setShowDetails, setBookingDetails, origData, setBookingData, setDataChanged, editedField) => {
  const { isAuthorized, accessToken } = useContext(AdminContext); 

  // EDIT BOOKING
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

      await Promise.all(editPromises);
      setDataChanged(p => !p);
      setActionPerformed(p => !p);
    } catch (error) {
      alert(error.message)
    }
  } 

  // HANDLE DELETE BOOKING
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

  // HANDLE VIEW BOOKING DETAILS
  const viewBookingDetail = async (id) => {
    const matchingBooking = origData.find(data => data._id === id);

    if(!matchingBooking) {
      alert('Bookiong Not Found!');
      return;
    }

    setBookingDetails(matchingBooking);
    setShowDetails(true);
  }

  // HANDLE FILTER BY RESORT
  const filterByResort = (resort) => {
    const filteredData = origData.filter(data => data.villa_resort.toLowerCase().includes(resort.toLowerCase()));
    setBookingData(filteredData);
  };
  return {
    deleteBooking, viewBookingDetail, filterByResort, handleEdit
  }
}

export default BookingActions