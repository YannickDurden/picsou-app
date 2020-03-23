import { Component, ViewChild } from '@angular/core';
import { ExpenseComponent } from './expense/expense.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'handle-budget';
  @ViewChild(ExpenseComponent, {read: '', static: false}) private expenseComponent: ExpenseComponent;

  onChange(event) {
    if (event.index === 0) {
      this.expenseComponent.getExpenses();
    }
  }
}
