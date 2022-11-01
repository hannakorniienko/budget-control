import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState : MoneyItem[] = []

const expenseSlicer = createSlice({
    name: "expenses",
    initialState,
    reducers: {
        addExpense: (state, action) => {
            state.push(action.payload)
        },
        deleteExpense: () => {
            
        }
    }
})

const expenseReducer = expenseSlicer.reducer
export const {addExpense, deleteExpense} = expenseSlicer.actions
export default expenseReducer