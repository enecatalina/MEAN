import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colorArray = [ 'Tomato', 'Orange', 'DodgerBlue', 'MediumSeaGreen', 'Grey', 'SlateBlue', 'Violet', 'LightGrey'];
  color = [];

  ngOnInit() {
   for(let i = 0; i < 8; i++){
     this.color[i] = this.colorArray[Math.floor(Math.random()*this.colorArray.length)]
   }
  }
}
