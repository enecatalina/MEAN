import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ninja-gold',
  templateUrl: './ninja-gold.component.html',
  styleUrls: ['./ninja-gold.component.css']
})
export class NinjaGoldComponent implements OnInit {

  @Output() taskEmitter = new EventEmitter();

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  Farm(){
    this._dataService.Farm();
    this.taskEmitter.emit()
  }

  Cave(){
    this._dataService.Cave();
    this.taskEmitter.emit();
  }

  Casino(){
    this._dataService.Casino();
    this.taskEmitter.emit();
  }

  House(){
    this._dataService.House();
    this.taskEmitter.emit();
  }

}
