import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Merchandise } from '../interface/merchandise';

@Injectable({
  providedIn: 'root'
})
export class MerchandiseService {

  URL_LINK = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  // TODO: De vazut che fel de parametru punem pentru a
  // avea doar marfa pentru saptamana currenta sau luna curenta
  getMerchandise(actualYear: string): Observable<Merchandise[]> {
    //return this.http.get<Profit[]>(`${this.URL_LINK}/findProfitByYear/${actualYear}`);
    return this.http.get<Merchandise[]>(`${this.URL_LINK}/merchandise`);
  }
}
