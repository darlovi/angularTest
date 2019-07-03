import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IsodatePipe} from './pipe/isodate.pipe';
import {ColorStatusDirective} from './directives/color-status.directive';

@NgModule({
  declarations: [
    IsodatePipe,
    ColorStatusDirective
  ],
  exports: [
    IsodatePipe,
    ColorStatusDirective
  ],
  providers: [
    IsodatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
