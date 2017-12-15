import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.service'


import { AppComponent } from './app.component';
import { NinjaGoldComponent } from './ninja-gold/ninja-gold.component';
import { NinjaGoldReviewComponent } from './ninja-gold-review/ninja-gold-review.component';


@NgModule({
  declarations: [
    AppComponent,
    NinjaGoldComponent,
    NinjaGoldReviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
