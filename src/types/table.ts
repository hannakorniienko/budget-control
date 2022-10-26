export interface TableItem{
    title: string,
    amount: number,
    date: string,
    id?: number
}
export interface TableProps{
    list: TableItem[],
}