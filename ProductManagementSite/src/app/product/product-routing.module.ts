import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../shared/components/main/main.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'new',
    component: ProductAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
