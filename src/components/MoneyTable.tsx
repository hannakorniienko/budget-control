import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, TableFooter} from '@mui/material'

import { MoneyItem } from '../types/money'

const MoneyTable = ({list}: {list: MoneyItem[]}) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(item =>  (
            <TableRow key={item.id} >
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
 
      </Table>
    </TableContainer>
  )
}

export default MoneyTable