import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInsertRequest } from '../models/product-insert.request';
import { ProductListRequest } from '../models/product-list.request';
import { ProductUpdateRequest } from '../models/product-update.request';
import { ProductResponse } from '../models/product.response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: HttpClient) { }

  GetProducts(params: ProductListRequest): Observable<any> {
    let httpParams = new HttpParams();
    if (params.name != null && params.name !== "") {
      httpParams = httpParams.set('name', params.name);
    }
    if (typeof params.value === "number") {
      httpParams = httpParams.set('value', params.value.toString());
    }
    console.log("Status: ");
    console.log(params.status);
    if (params.status == 'true' || params.status == 'false') {
      httpParams = httpParams.set('status', params.status);
    }
    return this.httpService.get("http://localhost:3000/products/", { params: httpParams });
  }

  GetProduct(id: number): Observable<any> {
    return this.httpService.get("http://localhost:3000/products/" + id);
  }

  UpdateProduct(product: ProductUpdateRequest): Observable<any> {
    return this.httpService.put("http://localhost:3000/products/" + product.id, product);
  }

  PostProduct(product: ProductInsertRequest): Observable<any>{
    return this.httpService.post("http://localhost:3000/products/", product);
  }

  DeleteProduct(id: number): Observable<any> {
    return this.httpService.delete("http://localhost:3000/products/" + id);
  }
}
