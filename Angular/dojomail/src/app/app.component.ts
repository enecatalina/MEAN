import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    { email: 'bill@gates.com', important: false, subject: 'New Windows', content: 'Windows XI will launch in 2100.' },
    { email: 'ene.catalin@gmail.com', important: true, subject: 'Christmas List', content: 'This is my Christmas list this year'},
    { email: 'ene.cris@gmail.com' , important : false, subject: 'Work Meeting Summary', content: 'Thank you for attending the meetting'}, 
    { email: 'ene.catalin@gmail.com', important: false, subject: 'Christmas List', content: 'This is my Christmas list this year' }, 
  ]
}
