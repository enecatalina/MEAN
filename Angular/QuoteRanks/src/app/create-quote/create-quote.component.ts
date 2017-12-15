import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quote } from './quote';


@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {
  @Output()  createQuote = new EventEmitter();
  quotes = [];
  newQuote = new Quote;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData){
    console.log(formData);
    console.log("=======")
    this.quotes.push(this.newQuote);
    console.log("--------")
    this.createQuote.emit(this.newQuote);
    this.newQuote = new Quote;
  }
  
  // createQuoteTriggered(){
  //   this.createQuote.emit(this.newQuote);
  // }
}
