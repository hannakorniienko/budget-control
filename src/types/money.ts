export interface MoneyItem{
    title: string,
    amount: number,
    date: string,
    id: number
}
export interface MoneyProps{
    option: "Income"|"Expense",
    balance: number
    list: MoneyItem[],
    setList: React.Dispatch<React.SetStateAction<MoneyItem[]>>,
}
export interface MoneyTableProps {
    option: string
}