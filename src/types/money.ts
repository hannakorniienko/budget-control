export interface MoneyItem{
    title: string,
    amount: number,
    date: string,
    id?: number
}
export interface MoneyProps{
    option: "Income"|"Expense",
    list: MoneyItem[],
    setList: React.Dispatch<React.SetStateAction<MoneyItem[]>>,
    balance: number
}