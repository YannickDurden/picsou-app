import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { SheetyService } from '../services/sheety.service';
import { categorie } from '../categorie';
import { Depense } from '../depense';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit, OnDestroy {
  durationInSeconds = 5;
  categorie = categorie;
  form: FormGroup;
  postSub: Subscription;

  constructor(
    private sheetyService: SheetyService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) {
      this.form = this.formBuilder.group({
        libelle: '',
        cout: '',
        categorie: ''
      });
    }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.postSub !== undefined && !this.postSub.closed) {
      this.postSub.unsubscribe();
    }
  }

  onSubmit(formData: Depense) {
    const body = {
      depense : formData
    };

    this.postSub = this.sheetyService.postExpense(body)
      .subscribe(
        res => {
          this.snackBar.open(
            'Opération ajouté',
            'close',
            { duration: 2000 }
          );
          this.form.reset();
        },
        error => this.snackBar.open(
          'Oups, quelque chose c\'est mal passé',
          'close',
          { duration: 2000 })
      );
  }

  snackBarMessage() {
    this.snackBar.open(
      'Opération ajouté',
      'close',
      { duration: 2000 }
    );
  }
}
