import {Component, OnDestroy, OnInit} from '@angular/core';
import {IsodatePipe} from '../isodate.pipe';
import {ListService} from '../list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  mostrar = true;


  list: { name: string, id: number, date: Date }[] = [];

  constructor(private isoDate: IsodatePipe, private listService: ListService) {

  }

  ngOnInit() {
    this.list = this.listService.getList();
  }


  ngOnDestroy(): void {

  }

  isShow(item) {
    return item.id % 2;
  }

  // PIPE IMPURO
  transformDate(date: Date) {
    // console.log('TransformDate');
    this.isoDate.whatever(1);
    return this.isoDate.transform(date);
  }

  order(param) {
    this.list = this.list.sort((prev, next) => prev[param] - next[next.name]);
    // console.log(param);
  }

}
