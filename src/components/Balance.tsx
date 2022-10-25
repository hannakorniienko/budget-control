import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import SavingsIcon from '@mui/icons-material/Savings';

import '../styles/balance.css'
import { BalanceProps } from '../types/balance'
import { Stack } from '@mui/system'

const Balance = ({balance, setSaving}: BalanceProps) => {
  const [amount, setAmount] = useState(0)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (amount <= balance){
      setSaving((saving) => saving + amount)
    }else{
      alert("Insufficient funds!")
    }

  }
  return (
    <Stack direction="column" alignItems="center">
      <p>Balance: {balance}</p>
      <Stack
          direction="column"
          spacing={2}
          component="form"
          onSubmit={(e) => onSubmit(e)}>
          <TextField
              label="Transfer to saving"
              type="number" 
              name="addSaving"
              onChange={(e) => setAmount(Number(e.target.value))}/>
          <Button 
              type='submit'
              startIcon={<SavingsIcon/>}
              variant="contained"
              color="primary"
              className='save-btn'
          >Transfer</Button>
      </Stack>
    </Stack>
  )
}

export default Balance