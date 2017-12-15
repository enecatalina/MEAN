import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SwitchBoard';

  //all the buttons are ON "true"
  switches = [true, true, true, true, true, true, true, true, true, true,]

  //the button is ON ("this.switches[i]" = true) ONCE it is CLICKED on it will become OFF ("!this.switches[i]" = false)
  //on the component.ts file we would be looping through teh switches array 
  switchOnNOff(i){
    this.switches[i] = !this.switches[i];
  }
}
