import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  
  constructor() { }

  totalGold = 0;
  ninjaGoldReview = []

  parentTotalGold(){ 
    return this.totalGold 
  }

  Farm(){
    console.log("IN DataService: Farm");
    let goldEarned = Math.floor(Math.random() * 6) + 1; 
    console.log("Gold Earned")
    console.log(goldEarned);
    this.totalGold += goldEarned;
    console.log("New Gold Total")
    console.log(this.totalGold)
    this.ninjaGoldReview.push(`You earned ${goldEarned} at the Farm!!`)
  }

  Cave(){
    console.log("IN DataService: Cave")
    let goldEarned = Math.floor(Math.random()*5) + 5;
    console.log("Gold Earned")
    console.log(goldEarned)
    this.totalGold += goldEarned;
    console.log("New Gold Total")
    console.log(this.totalGold)
    this.ninjaGoldReview.push(`You earned ${goldEarned} at the Cave!!`)
  }

  Casino(){
    // console.log("IN DataService: Casino")
    // let goldEarned = Math.floor(Math.random() * 100) + 1;
    // console.log("Gold Earned")
    // console.log(goldEarned);
    // this.totalGold += goldEarned;
    // console.log("New Gold Total")
    // console.log(this.totalGold)
    // this.ninjaGoldReview.push(`You earned ${goldEarned} at the Casino!`)

    let goldEarned = Math.floor(Math.random() * 100) + 1
    let winLose = Math.floor(Math.random() * 100) + 1
    if (winLose == 5 && 24 && 37 && 43 && 51 && 66 & 78 & 83 & 99 ) {
      this.totalGold += goldEarned;
      this.ninjaGoldReview.push(`You earned ${goldEarned} Gold at the Casino`)
    } else {
      this.totalGold -= goldEarned;
      this.ninjaGoldReview.push(`You lost ${goldEarned} Gold at the Casino`)
    }

  }

  House(){
    console.log("IN DataService: House")
    let goldEarned = Math.floor(Math.random() * 7) + 8;
    console.log("Gold Earned")
    console.log(goldEarned);
    this.totalGold += goldEarned;
    console.log("New Gold Total")
    console.log(this.totalGold)
    this.ninjaGoldReview.push(`You earned ${goldEarned} at the House!`)
  }
 
}
