import TableCell from './TableCell';
import ActionsCell from './ActionsCell';
import StatusCell from './StatusCell';

const TableRow = ({ data }) => {
  const { id, villa, name, date, contact, status } = data;

  return (
    <tr>
        <TableCell>{villa}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>{contact}</TableCell>
        <StatusCell status={status}/>
        <ActionsCell />
    </tr>
  ) 
}

export default TableRow