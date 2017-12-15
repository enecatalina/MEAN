import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _DataService: DataService) { }
  title = "Ninja Gold"
  Total = this._DataService.totalGold;

  totalNinjaGold(event) {
    console.log("event emitted and picked up")
    this.Total = this._DataService.parentTotalGold();
  }
}