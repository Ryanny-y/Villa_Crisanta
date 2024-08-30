import TableCell from './TableCell';
import ActionsCell from './ActionsCell';
import StatusCell from './StatusCell';
import dayjs from 'dayjs'

const TableRow = ({ data }) => {
  const { _id, villa_resort, first_name, last_name, reservation_date: { start, end}, contact_number, status = "Pending"} = data

  return (
    <tr>
        <TableCell id={_id} property='villa_resort' data={villa_resort} />
        <TableCell id={_id} property='first_name last_name' data={`${first_name} ${last_name}`} />
        <TableCell id={_id} property='reservation_date' data={`${dayjs(start).format('MM/DD/YYYY')} - ${dayjs(end).format('MM/DD/YYYY')}`} />
        <TableCell id={_id} property='contact_number' data={contact_number} />
        <StatusCell id={_id} property='status' status={status} />
        <ActionsCell id={_id}/>
    </tr>
  ) 
} 

export default TableRow