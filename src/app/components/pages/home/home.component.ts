import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  users:Array<string> = [];

  ngOnInit() {
		this.users = ['Jean', 'Julie', 'Ahrieane', 'Fred'];
  }

  addUser = (newUser) => {
  	this.users.push(newUser.value);
  	newUser.value = ""
  }


}
