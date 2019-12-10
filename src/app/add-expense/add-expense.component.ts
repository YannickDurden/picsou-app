import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { SheetyService } from '../services/sheety.service';
import { categorie } from '../categorie';
import { Depense } from '../depense';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  durationInSeconds = 5;
  categorie = categorie;
  form: FormGroup;

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

  onSubmit(formData: Depense) {
    const body = {
      depense : formData
    };

    this.sheetyService.postExpense(body)
      .subscribe(
        res => {
          this.snackBar.open('Opération ajouté');
          this.form.reset();
        },
        error => this.snackBar.open('Oups, quelque chose c\'est mal passé')
      );
  }

}
