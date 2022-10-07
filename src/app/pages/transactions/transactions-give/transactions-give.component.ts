import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-transactions-give',
	templateUrl: './transactions-give.component.html',
	styleUrls: ['./transactions-give.component.scss'],
})
export class TransactionsGiveComponent implements OnInit {
	credencial: string | null;
	accessToken: string;

	constructor(private router: Router) {
		this.accessToken =
			'"' +
			this.router.getCurrentNavigation()?.extras.state?.['accessToken'] +
			'"';
		this.credencial = '';
	}

	ngOnInit(): void {
		this.credencial = sessionStorage.getItem('accessToken');
		if (!this.credencial) {
			this.router.navigate(['/login'], {
				state: { accessToken: this.accessToken },
			});
		} else {
			if (this.accessToken !== this.credencial) {
				this.router.navigate(['/login']);
			}
		}
	}
}
