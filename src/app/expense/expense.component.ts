import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { SheetyService } from '../services/sheety.service';
import { Subscription } from 'rxjs';
import { Depenses } from '../depense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit, OnDestroy, OnChanges {
  expensesSub: Subscription;
  expenses: Depenses;

  constructor(private sheetyService: SheetyService) { }

  ngOnInit() {
   this.getExpenses();
  }

  ngOnDestroy() {
    if (this.expensesSub !== undefined && !this.expensesSub.closed) {
      this.expensesSub.unsubscribe();
    }
  }

  getExpenses() {
    this.expensesSub = this.sheetyService
      .getExpenses()
      .subscribe((res: Depenses) => this.expenses = res)
    ;
  }

}
