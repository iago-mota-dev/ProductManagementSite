import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class ProductModule { }
