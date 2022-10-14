import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthRequest } from 'src/app/core/models/auth-request.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
	form!: FormGroup;
	submitted: boolean;
	error: string;

	constructor(
		private authService: AuthService,
		private router: Router,
		private formBuilder: FormBuilder
	) {
		this.submitted = false;
		this.error = '';
		if (this.authService.currentUserValue) {
			this.router.navigate(['/']);
		}
		this.initForm();
	}

	initForm() {
		this.form = this.formBuilder.group({
			email: [null, [Validators.required, Validators.email]],
			password: [null, Validators.required],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
	}

	login(): void {
		this.submitted = true;
		// stop here if form is invalid
		if (this.form.invalid) {
			return;
		}
		this.authService.login(this.form.value as IAuthRequest).subscribe({
			next: (response) => {
				console.log(response);
				this.router.navigate(['/']);
			},
			error: (error) => {
				this.error = error.error;
			},
		});
	}
}
