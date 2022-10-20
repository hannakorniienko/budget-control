import React, { useEffect, useState } from 'react';

import './App.css';
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
    <div className="App">
      <Money option='Income' list={incomes} setList={setIncomes} />
      <Money option='Expense' list={expenses} setList={setExpenses} />
      <Saving saving={saving} />
      <Balance balance={balance} setSaving={setSaving} />
    </div>
  );
}

export default App;
