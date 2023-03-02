import { TypeOfSpending } from "../enums/typeOfSpending";

export interface CreateSpendingHistory {
  type: TypeOfSpending,
  title: string,
  price: string
}
