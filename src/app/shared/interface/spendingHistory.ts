import { TypeOfSpending } from "../enums/typeOfSpending";

export interface SpendingHistory {
  type: TypeOfSpending,
  title: string,
  price: string,
  createdAt: string
}
