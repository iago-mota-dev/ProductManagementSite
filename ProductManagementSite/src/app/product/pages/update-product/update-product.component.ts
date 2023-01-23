import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ProductUpdatedDialogComponent } from 'src/app/shared/components/product-updated-dialog/product-updated-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';
import { ProductUpdateRequest } from '../../models/product-update.request';
import { ProductResponse } from '../../models/product.response';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  form: FormGroup;
  id!: number;
  product!: ProductResponse;
  productUpdated!: ProductUpdateRequest;
  productStatusTag!: string;
  durationInSeconds: number = 2;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private productService: ProductService, private _snackBar: MatSnackBar, route: ActivatedRoute) {
    this.id = route.snapshot.params['id'];
    this.form = formBuilder.group({
      name: ['', []],
      value: ['', []],
      quantity: ['', []],
      idsupplier: ['', []],
      status: ['', []]
    });
  }
  ngOnInit(): void {
    this.productService.GetProduct(this.id).subscribe((x: any) => {
      this.product = x;
      this.setStatus(this.product.status as boolean);
    })
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SuccessDialogComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  setStatus(status: boolean) {
    if (status) {
      this.productStatusTag = "Active";
    }
    else {
      this.productStatusTag = "Inactive";
    }
  };

  setProduct() {
    let productRaw = this.form.getRawValue();
    productRaw.id = this.id;
    this.productUpdated = new ProductUpdateRequest(productRaw);
    if(this.productUpdated.name !== null){
      this.product.name = this.productUpdated.name;
    }
    if(this.productUpdated.value !== null){
      this.product.value = this.productUpdated.value;
    }
    if(this.productUpdated.quantity !== null){
      this.product.value = this.productUpdated.quantity;
    }
    if(this.productUpdated.status !== null){
      this.product.status = this.productUpdated.status;
    }
    if(this.productUpdated.idsupplier !== null){
      this.product.idsupplier = this.productUpdated.idsupplier;
    }
    this.product.updatedat = this.productUpdated.updatedat;
  }
  putProduct() {
    this.setProduct();
    this.productService.UpdateProduct(this.product).subscribe((x: any) => {
      console.log(x);
      this.openSnackBar();
    });
  }
}
