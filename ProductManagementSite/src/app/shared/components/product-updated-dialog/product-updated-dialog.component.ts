import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateProductComponent } from 'src/app/product/pages/update-product/update-product.component';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-product-updated-dialog',
  templateUrl: './product-updated-dialog.component.html',
  styleUrls: ['./product-updated-dialog.component.css']
})
export class ProductUpdatedDialogComponent {
  constructor(private _snackBar: MatSnackBar, private productUpdate: UpdateProductComponent) { }
  durationInSeconds: number = 2;
  openSnackBar() {
    this.productUpdate.putProduct();
    this._snackBar.openFromComponent(SuccessDialogComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
