import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  mostrar = true;

  list: { name: string, id: number }[] = [];

  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.list.push({
        name: 'Whatever' + i,
        id: i,
      });
    }
  }

  isShow() {
    return this.mostrar;
  }

}
