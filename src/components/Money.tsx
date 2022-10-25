import React, { useState } from 'react'
import { Box, TextField, Button, List, ListItem, styled } from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import { MoneyProps } from '../types/money'
import { BalanceProps } from '../types/balance'
import '../styles/money.css'

const Money = ({option, list, setList}: MoneyProps, {balance}: BalanceProps) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (option === "Expense"){
            if (amount > balance){
                alert("Insufficient funds")
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
                >Save</Button>
        <ul>
            {
                list.length > 0 && list.map(
                    item => (
                        <li key={item.id}> {item.title}, {item.amount}, {item.date}</li>
                    )
                )
            }
        </ul>
        </Box>
  )
}

export default Money