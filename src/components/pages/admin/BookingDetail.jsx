import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { BookingContext } from "../../../context/BookingContext";
import dayjs from "dayjs";

const BookingDetail = () => {
  const { showDetails, setShowDetails, bookingDetails, setBookingDetails } = useContext(BookingContext);
  const statusColor = bookingDetails.status === "Confirmed"
  ? "text-green-600"
  : bookingDetails.status === "Pending"
  ? "text-orange-600"
  : "text-red-600";

  const convertedTime = () => {
    const [ hoursStr, minutesStr ] = bookingDetails.time_in.split(':');
    let hours = parseInt(hoursStr);

    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;

    return `${hours}:${minutesStr} ${period}`;
  }

  return (
    <>
      {showDetails && (
        <div className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-light rounded-lg drop-shadow-2xl gap-3 flex flex-col justify-center  p-8">
          <h1 className="font-semibold text-base flex flex-col md:gap-2 md:items-end md:flex-row ">
            Resort:{" "}
            <span className="text-yellow-600 text-xl">{bookingDetails.villa_resort}</span>
          </h1>

          <main id="detailed-info" className="font-medium flex flex-col gap-2">
            <header className="header flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
              {/* FOR FULL NAME */}
              <section id="full name" className="flex gap-10">
                <div>
                  <p className="text-xs font-normal">First Name</p>
                  <p className="text-sm md:text-base">{bookingDetails.first_name}</p>
                </div>

                <div>
                  <p className="text-xs font-normal">Last Name</p>
                  <p className="text-sm md:text-base">{bookingDetails.last_name}</p>
                </div>
              </section>

              {/* FOR CONTACT NUNBER */}
              <section className="flex flex-col gap-2">
                <div>
                  <p className="text-xs font-normal">Contact Number</p>
                  <p className="text-sm md:text-base">{bookingDetails.contact_number}</p>
                </div>

                <div>
                  <p className="text-xs font-normal">
                    Alternative Contact Number
                  </p>
                  <p className="text-sm md:text-base">{bookingDetails.alt_contact_number}</p>
                </div>
              </section>
            </header>

            {/* FOR ADDRESS */}
            <section>
              <p className="text-xs font-normal">Address</p>
              <address className="text-sm md:text-base">
                {bookingDetails.address}
              </address>
            </section>

            {/* RESERVATION DATE */}
            <section>
              <p className="text-xs font-normal">Reservation Date</p>
              <p className="text-sm md:text-base">
                {dayjs(bookingDetails.reservation_date.start).format('MMMM DD, YYYY')} - {dayjs(bookingDetails.reservation_date.end).format('MMMM DD, YYYY')}
              </p>
            </section>

            {/* TIME IN AND STATUS*/}
            <aside className="flex gap-14">
              <section>
                <p className="text-xs font-normal">Time In</p>
                <p className="text-sm md:text-base">{convertedTime()}</p>
              </section>

              <section>
                <p className="text-xs font-normal">Status</p>
                <p className={`text-sm font-semibold md:text-base ${statusColor}`}>
                  {bookingDetails.status}
                </p>
              </section>
            </aside>

            {/* NUMBER OF ROOMS AND GUESTS */}
            <div className="flex gap-14">
              <section>
                <p className="text-xs font-normal">Number of Rooms</p>
                <p className="text-sm md:text-base">{bookingDetails.number_of_guests}</p>
              </section>

              <section>
                <p className="text-xs font-normal">Number of Guests</p>
                <p className="text-sm md:text-base">{bookingDetails.number_of_rooms}</p>
              </section>
            </div>

            {/* X BUTTON */}
            <button 
              className="absolute top-5 right-5 hover:text-yellow-600 duration-200"
              onClick={() => {
                setShowDetails(false);
                setBookingDetails({});
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </main>
        </div>
      )}
    </>
  );
};

export default BookingDetail;
