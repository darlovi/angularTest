import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {IsodatePipe} from './isodate.pipe';
import {ListService} from './list.service';
import { ColorStatusDirective } from './color-status.directive';
import {FormsModule} from '@angular/forms';
import { ProductFilterComponent } from './product-filter/product-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    IsodatePipe,
    ColorStatusDirective,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [IsodatePipe, ListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
