import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../entities/user.entity';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	users:Array<User> = []

	constructor (private UserService: UserService) {
		this.users = UserService.users
	}

	addUser = (newUser) => {
		this.UserService.addUser(newUser)
		newUser.value = ""
	}

	ngOnInit() {}
}
