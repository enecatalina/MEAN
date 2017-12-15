import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';


  quotes = [
    { quote: 'To be, or not to be', author: 'Prince Hamlet', rating: 2 },
  ]

  handleCreateQuote(quotes){
    console.log("handleCreateQuote")
    this.quotes.push(quotes)
    console.log(quotes)
  }

  deleteQuote(quotes) {
    const idx = this.quotes.indexOf(quotes);
    this.quotes.splice(idx, 1);
  }
}

