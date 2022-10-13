import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {
		if (this.authService.currentUserValue) {
			this.router.navigate(['/']);
		}
	}

	ngOnInit(): void {}
}
