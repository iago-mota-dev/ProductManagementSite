import { Component, OnInit } from '@angular/core';
import { ProductListRequest } from '../../models/product-list.request';
import { ProductResponse } from '../../models/product.response';
import { ProductService } from '../../services/product.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['id','name', 'value', 'quantity', 'status', 'createdat', 'updatedat', 'deletedat', 'idsupplier', 'menu'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  productListRequest: ProductListRequest = new ProductListRequest({});
  productArrayResponse!: Array<ProductResponse>;

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.GetProducts(this.productListRequest).subscribe((x: any) => {
      this.productArrayResponse = x;
      console.log(this.productArrayResponse);
      this.dataSource = new MatTableDataSource(this.productArrayResponse);
      this.dataSource.paginator = this.paginator;
    });
  }
  update(id:number){

  }
  delete(id:number){
    this.productService.DeleteProduct(id).subscribe((x : any) => {
      console.log("deleted");
      console.log(x);
    });
  }


}
