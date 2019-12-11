import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Depense } from '../depense';
import { sheetyApi } from './sheety';

@Injectable({
  providedIn: 'root'
})
export class SheetyService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(sheetyApi.username + ':' + sheetyApi.password)
    })
  };

  constructor(private http: HttpClient) { }

  getExpenses() {
    return this.http.get(sheetyApi.url, this.httpOptions);
  }

  postExpense(body: { depense: Depense}) {
    return this.http.post(sheetyApi.url, body, this.httpOptions);
  }
}
