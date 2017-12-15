import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<-- Import FormModules
// import { HttpModule } from '@angular/http'; //<-- Import HttpModules
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- need to also include module in your AppModules
    // HttpModule, //<-- need to also include module in your AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
