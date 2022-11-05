import { combineReducers } from "@reduxjs/toolkit";
import expenseReducer from "./reducers/expenses";
import incomeReducer from "./reducers/incomes";

export const rootReducer = combineReducers({
    incomeReducer,
    expenseReducer
})