import { ActionTypes } from "@mui/base";
import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState : MoneyItem[] = []

const incomeSlicer = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        addIncome: (state, action) => {
            state.push(action.payload)
        },
        deleteIncome: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

const incomeReducer = incomeSlicer.reducer
export const {addIncome, deleteIncome} = incomeSlicer.actions
export default incomeReducer