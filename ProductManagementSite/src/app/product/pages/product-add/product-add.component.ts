import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ProductInsertRequest } from '../../models/product-insert.request';
import { ProductService } from '../../services/product.service';
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent{
  form: FormGroup;
  product!: ProductInsertRequest;
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private productService: ProductService) { 

    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      value: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      idsupplier: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }
  postProduct(){
    this.productService.PostProduct(this.product);
  }

  setProduct(){
   let productRaw = this.form.getRawValue();
    this.product = new ProductInsertRequest(productRaw);
  }


  openDialog() {
    this.dialog.open(ConfirmationDialogComponent,  {
      width: '20%',
      data: {productAdd: this}
    });
  }
}
