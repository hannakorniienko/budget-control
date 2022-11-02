import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled, {
  tablePaginationUnstyledClasses as classes,
} from '@mui/base/TablePaginationUnstyled';

import { MoneyItem, MoneyTableProps } from '../types/money'
import '../styles/table.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { deleteIncome } from '../redux/reducers/incomes';
import { deleteExpense } from '../redux/reducers/expenses';
  
 
  const CustomTablePagination = styled(TablePaginationUnstyled)(
    () => `
    & .${classes.spacer} {
      display: none;
    }
  
    & .${classes.toolbar}  {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
  
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
      }
    }
  
    & .${classes.selectLabel} {
      margin: 0;
    }
  
    & .${classes.select}{
      padding: 2px;
      border: 1px solid #E0E3E7};
      border-radius: 50px;
      background-color: transparent;
    }
  
    & .${classes.displayedRows} {
      margin: 0;
  
      @media (min-width: 768px) {
        margin-left: auto;
      }
    }
  
    & .${classes.actions} {
      padding: 2px;
      border: 1px solid #E0E3E7};
      border-radius: 50px;
      text-align: center;
    }
  
    & .${classes.actions} > button {
      margin: 0 8px;
      border: transparent;
      border-radius: 2px;
      background-color: transparent;
      `,
  );
  
    const MoneyTable = ({option} : MoneyTableProps) => {
    const list = useSelector((state: RootState) => option === "Income" ? state.incomeReducer : state.expenseReducer)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);
    const dispatch = useDispatch()
    const onDelete = (id: number) => {
      if (option === "Income"){
          dispatch(deleteIncome(id))
        }else {
          dispatch(deleteExpense(id))
        }
    }
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  return(
    <div>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item =>  (
            <tr key={item.id} >
              <td>{item.date}</td>
              <td style={{ width: 120 }} align="right">{item.title}</td>
              <td style={{ width: 120 }} align="right">{item.amount}</td>
              <td onClick={() => onDelete(item.id)} style={{ width: 120 }} align="right">Delete</td>
            </tr>
          ))}
            {emptyRows > 0 && (
            <tr style={{ height: 34 * emptyRows }}>
              <td colSpan={3} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[4, 8, 12]}
              colSpan={4}
              count={list.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                } as any,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default MoneyTable