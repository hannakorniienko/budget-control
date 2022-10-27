import React, { useState } from 'react'
import { Box, TextField, Button, List, ListItem, styled } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { MoneyProps } from '../types/money'
import MoneyTable from './MoneyTable';
import '../styles/money.css'

const Money = ({option, list, balance, setList}: MoneyProps) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTitle("")
        setAmount(0)
        setDate("")
        if (option === "Expense"){
            if (amount > balance){
                alert("Insufficient funds")
                return
            } 
        }
        setList([{amount, date, title, id: Date.now()}, ...list])
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
        <MoneyTable list={list} />
        </Box>
  )
}

export default Money