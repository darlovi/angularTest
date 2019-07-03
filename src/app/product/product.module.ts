import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from '../product-list/product-list.component';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ProductFilterComponent} from '../product-filter/product-filter.component';

const productRoutes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'id',
    component: ProductDetailComponent,
  }
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class ProductModule {
}
