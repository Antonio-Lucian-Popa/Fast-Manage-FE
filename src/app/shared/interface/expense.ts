import { TypeOfSpending } from "../enums/typeOfSpending";

export interface Expense {
  id: string,
  value: number,
  type: TypeOfSpending,
  createdAt: string
}
