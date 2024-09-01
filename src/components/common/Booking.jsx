import SectionLayout from "../layout/SectionLayout";
import VillaHeaderTitle from "../common/VillaHeaderTitle";
import { useState } from "react";
import MyCalendar from "../ui/MyCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import Login from "../auth/Login";

const Booking = () => {
  const [ showCalendar, setShowCalendar ] = useState(false);
  const [ cleared, setCleared ] = useState(false);
  const [ submitMsg, setSubmitMsg ] = useState('')

  const [ fields, setFields ] = useState({
    chooseVilla: "",
    firstname: "",
    lastname: "",
    address: "",
    email: "",
    contactNumber: "",
    altContactNumber: "",
    reservationDate: {},
    guestsNumber: "",
    timeIn: "",
    numberOfRooms: "",
  });

  const [ spanClasses, setSpanClasses ] = useState({
    firstname: "top-3 left-5",
    lastname: "top-3 left-5",
    address: "top-3 left-5",
    email: "top-3 left-5",
    contactNumber: "top-3 left-5",
    altContactNumber: "top-3 left-5",
    reservationDate: "top-3 left-5",
    guestsNumber: "top-3 left-5",
    numberOfRooms: "top-3 left-5",
  });

  const valueSetter = (e, fieldName) => {
    const { value } = e.target;
    setFields((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setSpanClasses((prev) => ({
      ...prev,
      [fieldName]: value ? "-top-2 text-xs left-2" : "top-3 left-5",
    }));
  };

  const clearFields = () => {
    setFields({
      chooseVilla: "",
      firstname: "",
      lastname: "",
      address: "",
      email: "",
      contactNumber: "",
      altContactNumber: "",
      reservationDate: {},
      guestsNumber: "",
      timeIn: "",
      numberOfRooms: "",
    });

    setSpanClasses({
      firstname: "top-3 left-5",
      lastname: "top-3 left-5",
      address: "top-3 left-5",
      email: "top-3 left-5",
      contactNumber: "top-3 left-5",
      altContactNumber: "top-3 left-5",
      reservationDate: "top-3 left-5",
      guestsNumber: "top-3 left-5",
      numberOfRooms: "top-3 left-5",
    });

    setShowCalendar(false);
    setCleared(p => !p);
  };

  const submitBooking = async (e) => {
    e.preventDefault();
  
    try {
      if(!fields.chooseVilla || !fields.firstname || !fields.lastname || !fields.address || !fields.email || !fields.contactNumber || !fields.altContactNumber || !fields.guestsNumber || !fields.timeIn || !fields.numberOfRooms ) {
        throw new Error('All Fields Are Required!');
      }
  
      if(!Object.keys(fields.reservationDate).length) {
        throw new Error('Please choose your preferred reservation date.');
      }
  
      if(fields.contactNumber.length < 11 || fields.altContactNumber < 11) {
        throw new Error('Invalid Contact Number Or Alternative Contact Number');
      }

      const response = await fetch('https://vc-backend-72r1.onrender.com/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          villa_resort: fields.chooseVilla,
          first_name: fields.firstname,
          last_name: fields.lastname,
          address: fields.address,
          email: fields.email,
          contact_number: fields.contactNumber,
          alt_contact_number: fields.altContactNumber,
          reservation_date: {
            start: fields.reservationDate.start,
            end: fields.reservationDate.end
          },
          time_in: fields.timeIn,
          number_of_guests: parseInt(fields.guestsNumber, 10),
          number_of_rooms: parseInt(fields.numberOfRooms, 10)
        })
      })

      if(!response.ok) {
        const errData = await response.json();
        const errMsg = errData.message || errorData.statusText;
        throw new Error(errMsg);
      }  
      
      await response.json();
      setSubmitMsg('Reservation Confirmed. Please wait for the response.');
      setTimeout(() => {
        setSubmitMsg('');
      }, 2000);
      clearFields();

    } catch (error) {
      setSubmitMsg(error.message);
      setTimeout(() => {
        setSubmitMsg('');
      }, 2000);

    } 
  
  }

  return (
    <SectionLayout sectionId="book">
      <VillaHeaderTitle title="Book Your Dream Stay" fs="cursive" />

      <div className="w-10/12 mx-auto p-5 relative" id="book">
        {/* <Login /> */}

        <form
          onSubmit={submitBooking}
          className="booking-form flex flex-col gap-3 relative"
        >
          {/* CHOSEN VILLA */}
          <label
            htmlFor="choose-villa"
            className="flex-grow relative text-xs sm:text-base border shadow-md"
          >
            <select
              name="choose-villa"
              required
              value={fields.chooseVilla}
              id="choose-villa"
              className=" w-full px-4 py-3"
              onChange={(e) => valueSetter(e, "chooseVilla")}
            >
              <option value="" disabled>
                Select A Villa
              </option>
              <option value="Villa Crisanta 1">Villa Crisanta 1 Spring Resort</option>
              <option value="Villa Crisanta 2">Villa Crisanta 2 Spring Resort</option>
            </select>
          </label>

          {/* NAME */}
          <div className="full-name flex flex-col md:flex-row gap-3">
            <label
              htmlFor="first-name"
              className="relative text-xs sm:text-base border shadow-md flex-grow"
            >
              <input
                type="text"
                value={fields.firstname}
                onChange={(e) => valueSetter(e, "firstname")}
                required
                id="first-name"
                className="p-3 px-4 w-full"
              />
              <span
                className={`absolute duration-200 bg-light ${spanClasses.firstname}`}
              >
                First Name
              </span>
            </label>
            <label
              htmlFor="last-name"
              className="relative text-xs sm:text-base border shadow-md flex-grow"
            >
              <input
                type="text"
                value={fields.lastname}
                onChange={(e) => valueSetter(e, "lastname")}
                required
                id="last-name"
                className="p-3 px-4 w-full"
              />
              <span
                className={`absolute duration-200 bg-light ${spanClasses.lastname}`}
              >
                Last Name
              </span>
            </label>
          </div>

          {/* ADDRESS */}
          <label
            htmlFor="address"
            className="flex-grow relative text-xs sm:text-base border shadow-md"
          >
            <textarea
              name="address"
              value={fields.address}
              onChange={(e) => valueSetter(e, "address")}
              required
              id="address"
              className="w-full resize-none px-4 py-3 h-20"
            ></textarea>
            <span
              className={`absolute duration-200 bg-light ${spanClasses.address}`}
            >
              Address
            </span>
          </label>

          {/* EMAIL */}
          <label
            htmlFor="email"
            className="relative text-xs sm:text-base border shadow-md flex-grow"
          >
            <input
              type="email"
              value={fields.email}
              onChange={(e) => valueSetter(e, "email")}
              required
              id="email"
              className="p-3 px-4 w-full"
            />
            <span
              className={`absolute duration-200 bg-light ${spanClasses.email}`}
            >
              Email
            </span>
          </label>

          {/* CONTACT NUMBER */}
          <div className="contact-number flex flex-col md:flex-row gap-3">
            <label
              htmlFor="contact-number"
              className="relative text-xs sm:text-base border shadow-md flex-grow"
            >
              <input
                type="text"
                value={fields.contactNumber}
                onChange={(e) => valueSetter(e, "contactNumber")}
                required
                id="contact-number"
                className="p-3 px-4 w-full"
              />
              <span
                className={`absolute duration-200 bg-light ${spanClasses.contactNumber}`}
              >
                Contact No#
              </span>
            </label>
            <label
              htmlFor="alt-number"
              className="relative text-xs sm:text-base border shadow-md flex-grow"
            >
              <input
                type="text"
                value={fields.altContactNumber}
                onChange={(e) => valueSetter(e, "altContactNumber")}
                required
                id="alt-number"
                className="p-3 px-4 w-full"
              />
              <span
                className={`absolute duration-200 bg-light ${spanClasses.altContactNumber}`}
              >
                Alternative Contact No#
              </span>
            </label>
          </div>

          {/* DATE AND GUESTS */}
          <div className="date-guests flex flex-col md:flex-row gap-3">
            <label
              htmlFor="reservation-date"
              className="relative text-xs sm:text-base border shadow-md flex-grow flex-1"
            >
              <input
                type="text"
                className="py-3 px-4"
                disabled
                onClick={() => setShowCalendar(true)}
              />

              <MyCalendar
                cleared={cleared}
                setFields={setFields}
                showCalendar={showCalendar}
                setShowCalendar={setShowCalendar}
              />

              <span
                className={`flex items-center justify-between right-5 absolute duration-200 bg-light ${spanClasses.reservationDate}`}
                onClick={() => setShowCalendar(true)}
              >
                {!Object.keys(fields.reservationDate).length ? (
                  <p>Reservation Date</p>
                ) : (
                  <div className="flex items-center gap-3">
                    <p>
                      {dayjs(fields.reservationDate.start).format(
                        "ddd-MMM/DD/YY"
                      )}
                    </p>
                    <p>-</p>
                    <p>
                      {dayjs(fields.reservationDate.end).format(
                        "ddd-MMM/DD/YY"
                      )}
                    </p>
                  </div>
                )}
                <span>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-dark text-base md:text-xl hover:text-yellow-600 duration-200"
                  />
                </span>
              </span>
            </label>
            <label
              htmlFor="number-of-guests"
              className="relative text-xs sm:text-base border shadow-md flex-grow flex-1"
            >
              <input
                type="text"
                value={fields.guestsNumber}
                onChange={(e) => valueSetter(e, "guestsNumber")}
                required
                id="number-of-guests"
                className="p-3 px-4 w-full"
              />
              <span
                className={`absolute duration-200 bg-light ${spanClasses.guestsNumber}`}
              >
                No# of Guests (3 yrs. old & above)
              </span>
            </label>
          </div>

          {/* TIME IN & ROOMS */}
          <div className="time-rooms flex flex-col md:flex-row gap-3">
            <label
              htmlFor="time-in"
              className="relative text-xs sm:text-base border shadow-md flex-grow flex-1"
            >
              <input
                type="time"
                value={fields.timeIn}
                onChange={(e) => valueSetter(e, "timeIn")}
                required
                id="time-in"
                className="p-3 px-4 w-full"
              />
            </label>
            <label
              htmlFor="number-of-rooms"
              className="relative text-xs sm:text-base border shadow-md flex-grow flex-1"
            >
              <input
                type="number"
                min={0}
                max={8}
                value={fields.numberOfRooms}
                onChange={(e) => valueSetter(e, "numberOfRooms")}
                required
                id="number-of-rooms"
                className="p-3 px-4 w-full"
              />
              <span
                className={`absolute duration-200 bg-light ${spanClasses.numberOfRooms}`}
              >
                Number of Rooms (1 - 8)
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit bg-yellow-600 text-white font-semibold py-4 rounded-sm hover:bg-yellow-500 duration-200"
          >
            Submit
          </button>

          {/* Clear fields */}
          <button
            className="clear_field px-7 py-2 self-end block bg-gray-300 text-black hover:bg-gray-500 hover:text-white duration-200"
            type="button"
            onClick={clearFields}
          >
            Clear Form
          </button>

          {submitMsg && 
            <div className="absolute p-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-yellow-600 text-white font-semibold roundded-md shadow-xl z-10 rounded-md text-center">
            {submitMsg}
          </div>}
        </form>
      </div>
    </SectionLayout>
  );
};

export default Booking;
