import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';

  score = null;
  username = "";

  constructor(private _DataService: DataService) { }
  getUser(){
    this._DataService.getUser(this.username)
    .then(user => {
      if(user.id){
        this.score = user.public_repos + user.followers;
        this.username = "";
      }
    })
    // .catch(err ==> this.score ="user not found")
  }

  onSubmit(){
    this.getUser();
  }
}
