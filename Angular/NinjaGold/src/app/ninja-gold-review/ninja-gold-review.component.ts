import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ninja-gold-review',
  templateUrl: './ninja-gold-review.component.html',
  styleUrls: ['./ninja-gold-review.component.css']
})
export class NinjaGoldReviewComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  log = this._dataService.ninjaGoldReview
}
