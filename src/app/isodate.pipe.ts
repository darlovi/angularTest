import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'isodate'
})
export class IsodatePipe implements PipeTransform {

  // Pipe puro se puede utilizar en el resto del proyecto
  transform(value: Date): any {
    // console.log('transform con pipe');
    return value.toISOString();
  }

  whatever(value: number): any {
    // console.log('transform con pipe');
  }

}
