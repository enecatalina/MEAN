import { Component } from '@angular/core';
import { User } from './user'; //<----IMPORT
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  
  users = [];
  user = new User ();
  successRegister = "";

  onSubmit(){
    console.log("USER FORM HAS BEEN SUBMITTTED, this.user");
    this.users.push(this.user);
    this.user = new User();
    this.successRegister = "Thank you for registering" + "  " + this.user.firstName + ".We have sent you a confirmation email to " + this.user.email;
  }
}
