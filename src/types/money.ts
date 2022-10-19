export interface MoneyItem{
    title: string,
    amount: number,
    date: string,
    id?: number
}

export interface MoneyProps{
    option: "Income"|"Expense",
    list: MoneyItem[],
    setList: (value: MoneyItem[]) => void
}