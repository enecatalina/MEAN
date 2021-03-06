import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() myQuote;
  @Output() deleteQuoteEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  voteUp(quote) {
    quote.rating++;
  }

  voteDown(quote) {
    quote.rating--;
  }

  delete(quote) {
    this.deleteQuoteEvent.emit(quote);
  }

}
