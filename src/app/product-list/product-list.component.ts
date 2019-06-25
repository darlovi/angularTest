import {Component, OnDestroy, OnInit} from '@angular/core';
import {IsodatePipe} from '../isodate.pipe';
import {ListService} from '../list.service';
import {Router} from '@angular/router';
import {state} from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  mostrar = true;

  search = 'Hola';


  original: { name: string, id: number, date: Date }[] = [];

  list: { name: string, id: number, date: Date }[] = [];

  constructor(private isoDate: IsodatePipe, private listService: ListService, private router: Router) {

  }

  ngOnInit() {
    this.original = this.listService.getList();
    this.list = JSON.parse(JSON.stringify(this.original));
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

  onSearch(param) {
    this.list = this.original.filter((obj) => obj.name.startsWith(param));
    this.search = '';
    console.log(this.list);
  }

  goToDetail(product) {
    this.router.navigate(['detail'], {
      queryParams:
        {id: product.id},
    });
    console.log(product);
  }


}
