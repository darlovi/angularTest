import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  private _search;

  // Evento contenido variable search
  @Output() searchChange = new EventEmitter();
  // Evento que se dispara al boton click
  @Output() searchClick = new EventEmitter();

  @Input()
  set search(value) {
    console.log(value);
    this._search = value;
    this.searchChange.emit(this._search);
  }

  get search() {
    return this._search;
  }


  constructor() {
  }

  ngOnInit() {
  }

  onSearchChange() {
    this.searchClick.emit(this._search);
    console.log(this.search);
  }


  /*onSearch() {
    this.list = this.original.filter((obj) => obj.name.startsWith(this.search));

    console.log(this.list);
  }*/


}
