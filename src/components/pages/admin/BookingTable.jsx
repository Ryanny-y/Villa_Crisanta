import TableRow from "../../ui/admin/TableRow";
import TableCell from "../../ui/admin/TableCell";

const BookingTable = () => {
  return (
    <main className="px-5" id="booking_table">
      <table className="booking_table w-full border-spacing-y-3 border-separate">
        <thead className="text-lg font-medium bg-theadBg">
          <tr>
            <TableCell content={"Villa Resort"} />
            <TableCell content={"Name"} />
            <TableCell content={"Date"} />
            <TableCell content={"Contact"} />
            <TableCell content={"Status"} />
            <TableCell content={"Actions"} />
          </tr>
        </thead>

        <tbody className="font-medium">
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </main>
  );
};

export default BookingTable;
