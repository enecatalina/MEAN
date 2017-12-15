import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from './product';

@Injectable()
export class DataService {

  products = [
    { title: "Pokemon Stickers", price: "1.00", image: null },
    {title: "Disney Strickers", price: ".99", image: null}
]


  productsObservable = new BehaviorSubject(null);
  constructor() { }

  add(newProduct){
    console.log("IN: service/add")
    this.products.push(newProduct)
    console.log(newProduct)
  }
  updateProducts(newProduct) {
    console.log("IN: service/update")
    console.log(newProduct)
    // this.productsObservable.next(newProduct);
  }
}

