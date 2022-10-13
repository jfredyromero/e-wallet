import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAuthRequest } from 'src/app/core/models/auth-request.model';
import { IAuthResponse } from 'src/app/core/models/auth-response.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	user: IAuthRequest;
	error: string;
	// accessToken: string | null;
	constructor(private authService: AuthService, private router: Router) {
		this.user = {
			email: '',
			password: '',
		};
		this.error = '';
		// this.accessToken =
		// 	this.router.getCurrentNavigation()?.extras.state?.['accessToken'];
	}
	// login(): void {
	// 	this.error = '';
	// 	if (this.user.email !== '' && this.user.password !== '') {
	// 		this.authService.login(this.user).subscribe(
	// 			(response: IAuthResponse) => {
	// 				sessionStorage.setItem(
	// 					'accessToken',
	// 					JSON.stringify(response.accessToken)
	// 				);
	// 				this.router.navigate(['/'], {
	// 					state: { accessToken: response.accessToken },
	// 				});
	// 			},
	// 			(error: HttpErrorResponse) => {
	// 				this.error = error.error;
	// 			}
	// 		);
	// 	} else {
	// 		this.error = 'Por favor llena todos los campos!';
	// 	}
	// }

	login(): void {
		this.error = '';
		if (this.user.email !== '' && this.user.password !== '') {
			this.authService.login(this.user).subscribe({
				next: (response) => {
					console.log(response);
					this.router.navigate(['/']);
				},
				error: (error) => console.error(error),
			});
		} else {
			this.error = 'Por favor llena todos los campos!';
		}
	}
}
