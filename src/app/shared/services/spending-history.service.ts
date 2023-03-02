import { CreateSpendingHistory } from './../interface/createSpendingHistory';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpendingHistory } from '../interface/spendingHistory';

@Injectable({
  providedIn: 'root'
})
export class SpendingHistoryService {

  URL_LINK = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getSpendingHistory(): Observable<SpendingHistory[]> {
    return this.http.get<SpendingHistory[]>(`${this.URL_LINK}/findAll`);
  }

  addSpendingHistory(createSpending: CreateSpendingHistory): void {
    this.http.post(`${this.URL_LINK}/create`, createSpending);
  }
}
