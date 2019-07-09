import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  itemCount = 4;
  btnText = "ADD AN ITEM";
  goalText = "My First Life Goal";
  goals = [];
  constructor() { }
//event binding
  ngOnInit() {
    this.itemCount=this.goals.length;
  }
additem(){
  this.goals.push(this.goalText);
  this.goalText='';
  this.itemCount=this.goals.length;
}
}
