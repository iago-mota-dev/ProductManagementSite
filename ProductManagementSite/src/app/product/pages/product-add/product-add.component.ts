import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';
import { ProductInsertRequest } from '../../models/product-insert.request';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent{
  form: FormGroup;
  product!: ProductInsertRequest;
  durationInSeconds: number = 2;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private productService: ProductService, private _snackBar: MatSnackBar) { 

    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      idsupplier: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }
  postProduct(){
    this.setProduct();
    this.productService.PostProduct(this.product).subscribe((x: any)=> {
      console.log(x);
      this.openSnackBar();
    });
  }

  setProduct(){
   let productRaw = this.form.getRawValue();
    this.product = new ProductInsertRequest(productRaw);
  }
  
 
  openSnackBar() {
    this._snackBar.openFromComponent(SuccessDialogComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
