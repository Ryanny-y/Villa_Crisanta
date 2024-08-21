import SectionLayout from '../layout/SectionLayout';
import VillaHeaderTitle from '../common/VillaHeaderTitle';

const Booking = () => {
  return (
    <SectionLayout sectionId='book'>
      <VillaHeaderTitle title="Book Your Dream Stay" fs="cursive"/>

      <form action="" className="booking-form flex flex-col gap-3 p-5 w-10/12 mx-auto">

        {/* CHOSEN VILLA */}
        <label htmlFor="choose-villa" className='flex-grow relative border shadow-md'>
          <select name="choose-villa" required id="choose-villa" className=' w-full px-4 py-3'>
            <option value="" disabled selected>Select A Villa</option>
            <option value="villa-1">Villa Crisanta 1 Spring Resort</option>
            <option value="villa-2">Villa Crisanta 2 Spring Resort</option>
          </select>
        </label>

        {/* NAME */}
        <div className="full-name flex gap-3">
          <label htmlFor="first-name" className='relative border shadow-md flex-grow'>
            <input type="text" required id='first-name' className='p-3 px-4 w-full'/>
            <span className='absolute top-3 left-4 px-2'>First Name</span>
          </label>
          <label htmlFor="last-name" className='relative border shadow-md flex-grow'>
            <input type="text" required id='last-name' className='p-3 px-4 w-full'/>
            <span className='absolute top-3 left-4 px-2'>Last Name</span>
          </label>
        </div>

        {/* CONTACT NUMBER */}
        <label htmlFor="address" className='flex-grow relative border shadow-md'>
          <textarea name="address" required id="address" className='w-full resize-none outline-none px-4 py-3 h-20'></textarea>
          <span className='absolute top-3 left-4 px-2'>Address</span>
        </label>
        
        {/* EMAIL */}
        <label htmlFor="email" className='relative border shadow-md flex-grow'>
          <input type="email" required id='email' className='p-3 px-4 w-full'/>
          <span className='absolute top-3 left-4 px-2'>Email</span>
        </label>

        {/* CONTACT NUMBER */}
        <div className="contact-number flex gap-3">
          <label htmlFor="contact-number" className='relative border shadow-md flex-grow'>
              <input type="text" required id='contact-number' className='p-3 px-4 w-full'/>
              <span className='absolute top-3 left-4 px-2'>Contact No#</span>
            </label>
            <label htmlFor="alt-number" className='relative border shadow-md flex-grow'>
              <input type="text" required id='alt-number' className='p-3 px-4 w-full'/>
              <span className='absolute top-3 left-4 px-2'>Alternative Contact No#</span>
            </label>
        </div>

        {/* DATE AND GUESTS */}
        <div className="date-guests flex gap-3">
          <label htmlFor="reservation-date" className='relative border shadow-md flex-grow flex-1'>
            <input type="date" required id='reservation-date' className='p-3 px-4 w-full'/>
            {/* <span className='absolute top-3 left-4 px-2'>Reservation Date</span> */}
          </label>
          <label htmlFor="number-of-guests" className='relative border shadow-md flex-grow flex-1'>
            <input type="text" required id='number-of-guests' className='p-3 px-4 w-full'/>
            <span className='absolute top-3 left-4 px-2'>No# of Guests (3 yrs. old & above)</span>
          </label>
        </div>

        {/* TIME IN & ROOMS */}
        <div className="time-rooms flex gap-3">
          <label htmlFor="time-in" className='relative border shadow-md flex-grow flex-1'>
              <input type="time" required id='time-in' className='p-3 px-4 w-full'/>
              {/* <span className='absolute top-3 left-4 px-2'>Time in</span> */}
            </label>
            <label htmlFor="number-of-rooms" className='relative border shadow-md flex-grow flex-1'>
              <input type="text" required id='number-of-rooms' className='p-3 px-4 w-full'/>
              <span className='absolute top-3 left-4 px-2'>Number of Rooms (1 - 8)</span>
            </label>
        </div>
        
        {/* Submit Button */}
        <button className="submit bg-yellow-600 text-white font-semibold py-4 rouned-sm hover:bg-yellow-500 duration-200">Submit</button>
      </form>

    </SectionLayout>
  )
}

export default Booking