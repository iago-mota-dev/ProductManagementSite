import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProductUpdatedDialogComponent } from 'src/app/shared/components/product-updated-dialog/product-updated-dialog.component';
import { ProductUpdateRequest } from '../../models/product-update.request';
import { ProductResponse } from '../../models/product.response';
import { ProductService } from '../../services/product.service';
@Injectable({
  providedIn: 'root'
})

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
  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private productService: ProductService, route: ActivatedRoute) {
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

  openDialog() {
    this.dialog.open(ProductUpdatedDialogComponent,  {
      width: '20%',
      data: {productUpdate: this}
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

  setProduct(){
    let productRaw = this.form.getRawValue();
    productRaw.id = this.id;
    this.productUpdated = new ProductUpdateRequest(productRaw);
  }
  putProduct(){
    this.productService.UpdateProduct(this.productUpdated);
  }
}
