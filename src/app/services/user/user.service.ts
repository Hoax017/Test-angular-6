import { Injectable } from '@angular/core'
import { User } from '../../entities/user.entity'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root'
})
export class UserService {
	users:Array<User> = []

	constructor(private http: HttpClient) {
		this.getUser()
	}

	public addUser = (nameInput) => {
		this.users.push(new User({id: 0, name:nameInput.value}))
	}

	public getUser = () => {
		return this.makeRequest('users.php')
	}


	private makeRequest(path: string) {
		let url = `http://localhost:80/${ path }`;
		return this.http.get(url).subscribe((users: Array<User>) => {
			for(let user of users) {
				this.users.push(user)
			}
		})

	}
}
