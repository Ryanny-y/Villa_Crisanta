import SectionLayout from '../layout/SectionLayout';
import VillaHeaderTitle from '../common/VillaHeaderTitle';
import { useState } from 'react';

const Booking = () => {
  const [fields, setFields] = useState({
    chooseVilla: '',
    firstname: '',
    lastname: '',
    address: '',
    email: '',
    contactNumber: '',
    altContactNumber: '',
    reservationDate: '',
    guestsNumber: '',
    timeIn: '',
    numberOfRooms: ''
  });

  const [spanClasses, setSpanClasses] = useState({
    firstname: 'top-3 left-5',
    lastname: 'top-3 left-5',
    address: 'top-3 left-5',
    email: 'top-3 left-5',
    contactNumber: 'top-3 left-5',
    altContactNumber: 'top-3 left-5',
    guestsNumber: 'top-3 left-5',
    numberOfRooms: 'top-3 left-5',
  });

  const valueSetter = (e, fieldName) => {
    const { value } = e.target;
    setFields((prev) => ({
      ...prev,
      [fieldName]: value,
    }));

    setSpanClasses((prev) => ({
      ...prev,
      [fieldName]: value ? '-top-2 text-xs left-2' : 'top-3 left-5',
    }));
  };

  return (
    <SectionLayout sectionId='book'>
      <VillaHeaderTitle title="Book Your Dream Stay" fs="cursive"/>

      <form 
        onSubmit={(e) => {
          e.preventDefault();
          console.log(fields);
        }}
        className="booking-form flex flex-col gap-3 p-5 w-10/12 mx-auto"
      >
        
        {/* CHOSEN VILLA */}
        <label htmlFor="choose-villa" className='flex-grow relative text-xs sm:text-base border shadow-md'>
          <select 
            name="choose-villa" 
            required defaultValue={fields.chooseVilla} 
            id="choose-villa"
            className=' w-full px-4 py-3'
            onChange={(e) => valueSetter(e, 'chooseVilla')}
          >
            <option value="" disabled>Select A Villa</option>
            <option value="villa-1">Villa Crisanta 1 Spring Resort</option>
            <option value="villa-2">Villa Crisanta 2 Spring Resort</option>
          </select>
        </label>

        {/* NAME */}
        <div className="full-name flex flex-col md:flex-row gap-3">
          <label htmlFor="first-name" className='relative text-xs sm:text-base border shadow-md flex-grow'>
            <input 
              type="text" 
              value={fields.firstname}
              onChange={(e) => valueSetter(e, 'firstname')}
              required 
              id='first-name' 
              className='p-3 px-4 w-full'
            />
            <span className={`absolute duration-200 bg-light ${spanClasses.firstname}`}>First Name</span>
          </label>
          <label htmlFor="last-name" className='relative text-xs sm:text-base border shadow-md flex-grow'>
            <input 
              type="text" 
              value={fields.lastname}
              onChange={(e) => valueSetter(e, 'lastname')}
              required 
              id='last-name' 
              className='p-3 px-4 w-full'
            />
            <span className={`absolute duration-200 bg-light ${spanClasses.lastname}`}>Last Name</span>
          </label>
        </div>

        {/* ADDRESS */}
        <label htmlFor="address" className='flex-grow relative text-xs sm:text-base border shadow-md'>
          <textarea 
            name="address" 
            value={fields.address}
            onChange={(e) => valueSetter(e, 'address')}
            required 
            id="address" 
            className='w-full resize-none px-4 py-3 h-20'
          ></textarea>
          <span className={`absolute duration-200 bg-light ${spanClasses.address}`}>Address</span>
        </label>
        
        {/* EMAIL */}
        <label htmlFor="email" className='relative text-xs sm:text-base border shadow-md flex-grow'>
          <input 
            type="email" 
            value={fields.email}
            onChange={(e) => valueSetter(e, 'email')}
            required 
            id='email' 
            className='p-3 px-4 w-full'
          />
          <span className={`absolute duration-200 bg-light ${spanClasses.email}`}>Email</span>
        </label>

        {/* CONTACT NUMBER */}
        <div className="contact-number flex flex-col md:flex-row gap-3">
          <label htmlFor="contact-number" className='relative text-xs sm:text-base border shadow-md flex-grow'>
            <input 
              type="text"
              value={fields.contactNumber}
              onChange={(e) => valueSetter(e, 'contactNumber')}
              required 
              id='contact-number' 
              className='p-3 px-4 w-full'
            />
            <span className={`absolute duration-200 bg-light ${spanClasses.contactNumber}`}>Contact No#</span>
          </label>
          <label htmlFor="alt-number" className='relative text-xs sm:text-base border shadow-md flex-grow'>
            <input 
              type="text"
              value={fields.altContactNumber}
              onChange={(e) => valueSetter(e, 'altContactNumber')}
              required 
              id='alt-number' 
              className='p-3 px-4 w-full'
            />
            <span className={`absolute duration-200 bg-light ${spanClasses.altContactNumber}`}>Alternative Contact No#</span>
          </label>
        </div>

        {/* DATE AND GUESTS */}
        <div className="date-guests flex flex-col md:flex-row gap-3">
          <label htmlFor="reservation-date" className='relative text-xs sm:text-base border shadow-md flex-grow flex-1'>
            <input 
              type="date" 
              value={fields.reservationDate}
              onChange={(e) => valueSetter(e, 'reservationDate')}
              required 
              id='reservation-date' 
              className='p-3 px-4 w-full'
            />
          </label>
          <label htmlFor="number-of-guests" className='relative text-xs sm:text-base border shadow-md flex-grow flex-1'>
            <input 
              type="text" 
              value={fields.guestsNumber}
              onChange={(e) => valueSetter(e, 'guestsNumber')}
              required 
              id='number-of-guests' 
              className='p-3 px-4 w-full'
            />
            <span className={`absolute duration-200 bg-light ${spanClasses.guestsNumber}`}>No# of Guests (3 yrs. old & above)</span>
          </label>
        </div>

        {/* TIME IN & ROOMS */}
        <div className="time-rooms flex flex-col md:flex-row gap-3">
          <label htmlFor="time-in" className='relative text-xs sm:text-base border shadow-md flex-grow flex-1'>
            <input 
              type="time" 
              value={fields.timeIn}
              onChange={(e) => valueSetter(e, 'timeIn')}
              required 
              id='time-in' 
              className='p-3 px-4 w-full'
            />
          </label>
          <label htmlFor="number-of-rooms" className='relative text-xs sm:text-base border shadow-md flex-grow flex-1'>
            <input 
              type="text" 
              value={fields.numberOfRooms}
              onChange={(e) => valueSetter(e, 'numberOfRooms')}
              required 
              id='number-of-rooms' 
              className='p-3 px-4 w-full'
            />
            <span className={`absolute duration-200 bg-light ${spanClasses.numberOfRooms}`}>Number of Rooms (1 - 8)</span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="submit bg-yellow-600 text-white font-semibold py-4 rounded-sm hover:bg-yellow-500 duration-200">Submit</button>
      </form>
    </SectionLayout>
  );
}

export default Booking;
