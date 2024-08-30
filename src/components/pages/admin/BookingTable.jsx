import TableRow from "../../ui/admin/TableRow";

const BookingTable = () => {
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
        <TableRow data={{ id: 1, villa: 'Villa Crisanta 1', name: 'Ryanny M. Romero', date: '8/12/24 - 8/20/24', contact: '09999999', status: 'Active' }}/>

        <TableRow data={{ id: 1, villa: 'Villa Crisanta 1', name: 'Ryanny M. Romero', date: '8/12/24 - 8/20/24', contact: '09999999', status: 'Cancelled' }}/>

          {/* <TableRow /> */}
          {/* <TableRow /> */}
        </tbody>
      </table>
    </main>
  );
};

export default BookingTable;
