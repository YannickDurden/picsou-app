import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Depense } from '../depense';

@Injectable({
  providedIn: 'root'
})
export class SheetyService {
  url = 'https://v2-api.sheety.co/8748591440601807c2e7e9b2e546bf30/budget/depense';

  constructor(private http: HttpClient) { }

  getExpenses() {
    return this.http.get(this.url);
  }

  postExpense(body: { depense: Depense}) {
    return this.http.post(this.url, body);
  }
}
