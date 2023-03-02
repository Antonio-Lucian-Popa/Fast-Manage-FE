import { Expense } from './../../../shared/interface/expense';
import { Profit } from './../../../shared/interface/profit';
import { ProfitAndExpensesService } from './../../../shared/services/profit-and-expenses.service';
import { SpendingHistoryService } from './../../../shared/services/spending-history.service';
import { Component, OnInit } from '@angular/core';
import { TypeOfSpending } from 'src/app/shared/enums/typeOfSpending';
import { SpendingHistory } from 'src/app/shared/interface/spendingHistory';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  spendingsHistory: SpendingHistory[] = [
    {
      type: TypeOfSpending.GAS,
      title: "Gas",
      price: "- 300,14$",
      createdAt: "May 12, 2023 at 8:30 PM"
    },
    {
      type: TypeOfSpending.FOOD,
      title: "Food",
      price: "- 10,39$",
      createdAt: "May 12, 2023 at 10:30 PM"
    },
    {
      type: TypeOfSpending.Car_Stuff,
      title: "Car Stuff",
      price: "- 50,00$",
      createdAt: "May 10, 2023 at 09:14 PM"
    }
  ];

  barData: any[] = [];
  doughnutData: any[] = [];

  profit: Profit[] = [];
  expense: Expense[] = [];

  anualProfit: number = 0;
  anualExpense: number = 0;

  constructor(
    private spendingHistoryService: SpendingHistoryService,
    private profitAndExpenseService: ProfitAndExpensesService
  ) {
    // chartLabel push call be
  }

  ngOnInit(): void {
    this.doughnutData = [40, 60];
    const currentYear = new Date().getFullYear();
    // Retreive the spendings history
    //this.spendingHistoryService.getSpendingHistory().subscribe(spendings => this.spendingsHistory = spendings);

    // Retreive expenses and profit by current year
    this.getProfitAndExpenseByYear(currentYear);
  }


  /**
   * Actualize charts status by current year
   * @param year profit and expense by that year
   */
  getProfitAndExpenseByYear(year: number): void {
    forkJoin(
      {
        profit: this.profitAndExpenseService.getYearProfit(year.toString()),
        expense: this.profitAndExpenseService.getYearExpense(year.toString()),
      }
    ).subscribe(data => {
      this.profit = data.profit;
      const profitValues = data.profit.map(profit => profit.value);
      this.barData = profitValues;
      this.anualProfit = profitValues.reduce((sum, current) => sum + current, 0);

      this.expense = data.expense;
      const expenseValues = data.expense.map(expense => expense.value);
      this.anualExpense = expenseValues.reduce((sum, current) => sum + current, 0);

      if (this.anualExpense > 0 && this.anualProfit > 0) {
        this.doughnutData = [this.anualExpense, this.anualProfit];
      }
    });
  }

}
