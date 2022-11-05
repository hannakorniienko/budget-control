import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState : MoneyItem[] = []

let order = true
const incomeSlicer = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        addIncome: (state, action: PayloadAction<MoneyItem>) => {
            state.push(action.payload)
        },
        deleteIncome: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        },
        sortAmount: (state) => {
            if (order) {
                state.sort((a,b) => a.amount - b.amount)
            }else {
                state.sort((a,b) => b.amount - a.amount)
            }
            order =! order
        }
    }
})

const incomeReducer = incomeSlicer.reducer
export const {addIncome, deleteIncome, sortAmount} = incomeSlicer.actions
export default incomeReducer