import { Component, OnInit } from '@angular/core';
import { SheetyService } from '../services/sheety.service';
import { Subscription } from 'rxjs';
import { Depenses } from '../depense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expensesSub: Subscription;
  expenses: Depenses;

  constructor(private sheetyService: SheetyService) { }

  ngOnInit() {
    this.expensesSub = this.sheetyService
      .getExpenses()
      .subscribe((res: Depenses) => this.expenses = res)
    ;
  }

}
