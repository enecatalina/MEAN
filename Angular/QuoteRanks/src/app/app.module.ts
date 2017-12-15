import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<-- Import FormModules
import { HttpModule } from '@angular/http'; //<-- Import HttpModules

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    CreateQuoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- need to also include module in your AppModules
    HttpModule, //<-- need to also include module in your AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
