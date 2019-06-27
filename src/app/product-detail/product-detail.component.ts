import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListService} from '../list.service';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public formReact: FormGroup;

  public form: (name: string, date: Date, id?: number) => {
    name: 'hola',
    date: null,
  };

  constructor(private route: ActivatedRoute, private service: ListService, private location: Location, private fb: FormBuilder) {
    this.formReact = this.fb.group({
      name: [null, [Validators.required, Validators.maxLength(5)]],
      date: [null, [Validators.required]],
    });

    this.formReact.get('name').valueChanges.subscribe((text) => (console.log));
  }

  ngOnInit() {
    const list = this.service.getList();
    console.log(list);
    list.find((value) => value.id === parseInt(this.route.snapshot.params.id, 10));
    if (!!this.form) {
      this.form = {
        name: '',
        date: null,
      };
    }
  }

  public save() {
    if (!this.form.id) {
      this.service.save(this.form);
    } else {
      this.service.update(this.form);
    }
  }

  public returnLastPage() {
    this.location.back();
  }

  public saveReact() {
    console.log(this.formReact.value);

    if (this.formReact.valid) {
      console.log(this.formReact.value);
    } else {
      alert('Error en el form');
    }
  }

  //this.route.paramMap.subscribe(value =>console.log(value));

  // console.log(this.route.snapshot.params.id, 'Por path');

}
