import { configureStore } from "@reduxjs/toolkit";

import incomeReducer from "./reducers/incomes";
import expenseReducer from "./reducers/expenses";

const store = configureStore({
    reducer: {
        incomeReducer,
        expenseReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store