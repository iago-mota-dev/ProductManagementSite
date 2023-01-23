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
    if (params.name !== null) {
      httpParams = httpParams.append('name', params.name);
    }
    if (params.value !== null) {
      httpParams = httpParams.append('value', params.value.toString());
    }
    if (params.status !== null) {
      httpParams = httpParams.append('status', params.status.toString());
    }
    return this.httpService.get("http://localhost:3000/products/", { params: httpParams });
  }

  GetProduct(id: number): Observable<any> {
    return this.httpService.get("http://localhost:3000/products/" + id);
  }

  UpdateProduct(product: ProductUpdateRequest): Observable<any> {
    return this.httpService.put("http://localhost:3000/products/", product);
  }

  PostProduct(product: ProductInsertRequest): Observable<any>{
    return this.httpService.post("http://localhost:3000/products/", product);
  }

  DeleteProduct(id: number): Observable<any> {
    return this.httpService.delete("http://localhost:3000/products/" + id);
  }
}
