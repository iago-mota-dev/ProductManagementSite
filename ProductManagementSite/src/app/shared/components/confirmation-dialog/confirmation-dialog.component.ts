import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductAddComponent } from 'src/app/product/pages/product-add/product-add.component';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';


@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent {
  constructor(private _snackBar: MatSnackBar) { }
  durationInSeconds: number = 2;
  openSnackBar() {
    this._snackBar.openFromComponent(SuccessDialogComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}


