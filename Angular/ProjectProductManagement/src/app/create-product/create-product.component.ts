import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { Console } from '@angular/core/src/console';
// import { Output } from '@angular/core/src/metadata/directives';
// import { EventEmitter } from 'selenium-webdriver';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  newProduct = new Product();

  products = [];

  constructor(private _dataService: DataService, private _router: Router ){
    this._dataService.productsObservable.subscribe((products) => {
      this.newProduct = products;
    })
  }
 
  onSubmit(){
    //when the submit happens 
    console.log("IN: onSubmit");
    //in dataService there is a function to add the new product
    this._dataService.add(this.newProduct)
    //we are telling to go updateProduct function in dataService to update ALL products
    this._dataService.updateProducts(this.newProduct);
    console.log(this.products)
    this.newProduct = new Product();
    this._router.navigate(['/productList']);

  }
  ngOnInit() {
    this.newProduct = new Product();
  }


}
