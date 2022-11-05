export interface MoneyItem{
    title: string,
    amount: number,
    date: string,
    id: number
}
export interface MoneyProps{
    option: "Income"|"Expense",
    balance: number
}
export interface MoneyTableProps {
    option: string
}