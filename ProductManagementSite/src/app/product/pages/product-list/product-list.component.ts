import { Component, OnInit } from '@angular/core';
import { ProductListRequest } from '../../models/product-list.request';
import { ProductResponse } from '../../models/product.response';
import { ProductService } from '../../services/product.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'value', 'quantity', 'status', 'createdat', 'updatedat', 'deletedat', 'idsupplier', 'menu'];
  dataSource!: MatTableDataSource<any>;
  form: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  productListRequest: ProductListRequest = new ProductListRequest({});
  productArrayResponse!: Array<ProductResponse>;
  durationInSeconds: number = 2;

  constructor(private productService: ProductService, private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', []],
      value: ['', []],
      status: ['', []]
    });
  }
  ngOnInit(): void {
    this.getProducts();

  }
  getProducts() {
    this.productService.GetProducts(this.productListRequest).subscribe((x: any) => {
      this.productArrayResponse = x;
      console.log(this.productArrayResponse);
      this.dataSource = new MatTableDataSource(this.productArrayResponse);
      this.dataSource.paginator = this.paginator;
    });
  }
  update(id: number) {

  }
  delete(id: number) {
    this.productService.DeleteProduct(id).subscribe((x: any) => {
      console.log("deleted");
      console.log(x);
      this.openSnackBar();
      this.getProducts();
    });
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SuccessDialogComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  FilterProducts() {
    this.productListRequest = new ProductListRequest(this.form.getRawValue());
    this.getProducts();
  }
  ClearFilters(){
    this.form.reset();
  }


}
