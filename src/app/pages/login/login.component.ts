import { Component } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	username: any;
	password: string;
	constructor() {
		this.username = '';
		this.password = '';
	}
	login(): void {
		console.log(this.username);
		console.log(this.password);
	}
}
