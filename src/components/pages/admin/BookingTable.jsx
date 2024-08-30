import TableRow from "../../ui/admin/TableRow";
import { useContext } from "react";
import { BookingContext } from '../../../context/BookingContext';

const BookingTable = () => {
  const { bookingData } = useContext(BookingContext);

  return (
    <main className="px-5 overflow-x-auto" id="booking_table">
      <table className="booking_table w-full border-spacing-y-3 border-separate text-nowrap">
        <thead className="text-sm md:text-lg font-semibold bg-theadBg">
          <tr>
            <td className="py-2 px-4">Villa Resort</td>
            <td className="py-2 px-4">Name</td>
            <td className="py-2 px-4">Date</td>
            <td className="py-2 px-4">Contact</td>
            <td className="py-2 px-4">Status</td>
            <td className="py-2 px-4">Actions</td>
          </tr>
        </thead>

        <tbody className="text-xs md:text-base font-medium text-nowrap">
          {bookingData.map(data => 
            <TableRow key={data._id} data={data}/>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default BookingTable;
