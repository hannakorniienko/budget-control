import React, { useState } from 'react'
import { Box, TextField, Button, List, ListItem, styled } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { MoneyProps } from '../types/money'
import MoneyTable from './MoneyTable';
import '../styles/money.css'
import { addExpense } from '../redux/reducers/expenses';
import { addIncome } from '../redux/reducers/incomes';
import { useAppDispatch } from '../hooks/ReduxHooks';

const Money = ({option, balance}: MoneyProps) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const dispatch = useAppDispatch()
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTitle("")
        setAmount(0)
        setDate("")
        if (option === "Expense"){
            {
            if (amount > balance){
                alert("Insufficient funds")
                return
            } 
        }
            dispatch(addExpense({
                title, amount, date, id: Date.now()
            }))
        }else {
            dispatch(addIncome({
                title, amount, date, id: Date.now()
            }))
        }
    }
    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={(e) => onSubmit(e)}
            alignItems="flex-start"
            display="flex"
            flexDirection="column"
            gap={2}
        >
                <TextField
                    required
                    label={`Title of ${option}`}
                    onChange={(e)=> setTitle(e.target.value)}
                    value={title}
                />
                <TextField
                    required
                    label={`Amount of ${option}`}
                    onChange={(e)=> setAmount(Number(e.target.value))}
                    value={amount}
                    type="number"
                />
                <TextField
                    required
                    label={`Date of ${option}`}
                    onChange={(e)=> setDate(e.target.value)}
                    value={date}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                      }}
                />
                <Button 
                    type='submit'
                    startIcon={<AccountBalanceWalletIcon/>}
                    variant="contained"
                    color="primary"
                    className='save-btn'
                >Add</Button>
        <MoneyTable option={option} />
        </Box>
  )
}

export default Money