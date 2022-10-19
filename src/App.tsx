import React, { useState } from 'react';

import './App.css';
import Money from './components/Money';
import Balance from './components/Balance';
import Saving from './components/Saving';
import { MoneyItem } from './types/money';

function App() {
  const [incomes, setIncomes] = useState<MoneyItem[]>([])
  const [expenses, setExpenses] = useState<MoneyItem[]>([])
  return (
    <div className="App">
      <Money option='Income' list={incomes} setList={setIncomes} />
      <Money option='Expense' list={expenses} setList={setExpenses}/>
      <Saving />
      <Balance />
    </div>
  );
}

export default App;
