import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  private _showExpense = false;
  @Input()
  set showExpense(showExpense: boolean) {
    this._showExpense = showExpense;
  }
  
  get showExpense() {
    return this._showExpense;
  }
  constructor(private sheetyService: SheetyService) { }

  ngOnInit() {
    this.expensesSub = this.sheetyService
      .getExpenses()
      .subscribe((res: Depenses) => this.expenses = res)
    ;
  }

  ngOnDestroy() {
    if (this.expensesSub !== undefined && !this.expensesSub.closed) {
      this.expensesSub.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

}
