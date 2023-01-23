import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './pages/update-product/update-product.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
