import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState : MoneyItem[] = []

const incomeSlicer = createSlice({
    name: "incomes",
    initialState,
    reducers: {
        addIncome: () => {

        },
        deleteIncome: () => {
            
        }
    }
})

const incomeReducer = incomeSlicer.reducer
export default incomeReducer