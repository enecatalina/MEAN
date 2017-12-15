import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Product } from '../Product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products = [];
  
  constructor(private _dataService: DataService) {
    this.products = this._dataService.products;
  }

  ngOnInit() {
  }

}
