import React, { useState } from 'react'
import { BalanceProps } from '../types/balance'

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
    <div>
      <p>{balance}</p>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="addSaving">Transfer to saving account</label>
        <input type="number" name="addSaving" id="addSaving" onChange={(e) => setAmount(Number(e.target.value))} />
        <button type="submit">Transfer</button>
      </form>
    </div>
  )
}

export default Balance