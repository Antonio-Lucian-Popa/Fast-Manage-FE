import { Expense } from './../interface/expense';
import { Profit } from './../interface/profit';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfitAndExpensesService {

  URL_LINK = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getYearProfit(actualYear: string): Observable<Profit[]> {
    //return this.http.get<Profit[]>(`${this.URL_LINK}/findProfitByYear/${actualYear}`);
    return this.http.get<Profit[]>(`${this.URL_LINK}/profit`);
  }

  getYearExpense(actualYear: string): Observable<Expense[]> {
    //return this.http.get<Expense[]>(`${this.URL_LINK}/findProfitByYear/${actualYear}`);
    return this.http.get<Expense[]>(`${this.URL_LINK}/expense`);
  }
}
