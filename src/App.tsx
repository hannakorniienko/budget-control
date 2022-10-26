import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material'

import './styles/App.css';
import Money from './components/Money';
import Balance from './components/Balance';
import Saving from './components/Saving';
import { MoneyItem } from './types/money';

function App() {
  const [incomes, setIncomes] = useState<MoneyItem[]>([])
  const [expenses, setExpenses] = useState<MoneyItem[]>([])
  const [saving, setSaving] = useState(0)
  const [balance, setBalance] = useState(0)
  const totalIncome = incomes.reduce((prev, current) => prev + current.amount, 0)
  const totalExpense = expenses.reduce((prev, current) => prev + current.amount, 0)
  useEffect(() => {
    setBalance(totalIncome - totalExpense - saving)
  }, [incomes, expenses, saving])
  return (
    <Box className="App" padding={3}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={6}>
          <Money option='Income' list={incomes} setList={setIncomes} balance={balance} />
        </Grid>
        <Grid item md={4} xs={6}>
          <Money option='Expense' list={expenses} setList={setExpenses} balance={balance} />
        </Grid>
        <Grid item md={4} xs={12}>
          <Saving saving={saving} />
        </Grid>
      </Grid>
      <Balance balance={balance} setSaving={setSaving}/>
    </Box>
  );
}

export default App;
