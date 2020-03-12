import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'handle-budget';
  showExpense = false;

  onTabChanged(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.showExpense = true;
      console.log(this.showExpense);
    } else {
      this.showExpense = false;
      console.log(this.showExpense);
    }
  }
}
