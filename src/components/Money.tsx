import React, { useState } from 'react'
import { MoneyProps } from '../types/money'

const Money = ({option, list, setList}: MoneyProps) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setList([...list, {amount, title, date, id:Date.now()}])
    }
  return (
    <div>
        <form onSubmit={(e) => onSubmit(e)}>
            <div>
                <label htmlFor="title">Title of {option}</label>
                <input type="text" name="title" id="title" onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="amount">Amount of {option}</label>
                <input type="number" name="amount" id="amount" onChange={(e)=> setAmount(Number(e.target.value))} />
            </div>
            <div>
                <label htmlFor="date">Date of {option}</label>
                <input type="date" name="date" id="date" onChange={(e)=> setDate(e.target.value)} />
            </div>
            <button type='submit'>Save</button>
        </form>
        <ul>
            {
                list.length > 0 && list.map(
                    item => (
                        <li key={item.id}> {item.title}, {item.amount}, {item.date}</li>
                    )
                )
            }
        </ul>
    </div>
  )
}

export default Money