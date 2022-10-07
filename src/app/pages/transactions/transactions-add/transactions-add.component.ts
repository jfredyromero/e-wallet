import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-transactions-add',
	templateUrl: './transactions-add.component.html',
	styleUrls: ['./transactions-add.component.scss'],
})
export class TransactionsAddComponent implements OnInit {
	showCreditCardOptions = false;
	showPapPalOptions = false;
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

	onClickCreditCard(): void {
		this.showCreditCardOptions = !this.showCreditCardOptions;
	}

	onClickPaypal(): void {
		this.showPapPalOptions = !this.showPapPalOptions;
	}
}
