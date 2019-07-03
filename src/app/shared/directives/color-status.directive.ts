import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appColorStatus]'
})
export class ColorStatusDirective implements OnInit {

  @Input() item;

  constructor(private ref: ElementRef) {
    ref.nativeElement.style.color = 'red';
  }

  ngOnInit(): void {
    if (this.item.id === 7) {
      this.ref.nativeElement.style.color = 'blue';
    }
    console.log(this.item);
  }

  @HostListener('click')
  onClickSpan() {
    // Se usa mas para cambios de estilos no tanto logica
    console.log('Clicked span');
    this.ref.nativeElement.style.color = 'black';
  }

}
