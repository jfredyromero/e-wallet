import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITransactionRequest } from 'src/app/core/models/transaction.model';
import { WalletService } from 'src/app/core/services/wallet.service';

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

	form!: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private walletService: WalletService
	) {
		this.accessToken =
			'"' +
			this.router.getCurrentNavigation()?.extras.state?.['accessToken'] +
			'"';
		this.credencial = '';
		this.initForm();
	}

	ngOnInit(): void {
		// this.credencial = sessionStorage.getItem('accessToken');
		// if (!this.credencial) {
		// 	this.router.navigate(['/login'], {
		// 		state: { accessToken: this.accessToken },
		// 	});
		// } else {
		// 	if (this.accessToken !== this.credencial) {
		// 		this.router.navigate(['/login']);
		// 	}
		// }
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
	}

	initForm() {
		this.form = this.formBuilder.group({
			amount: [null, [Validators.required, Validators.min(0.1)]],
		});
	}

	onSubmit() {
		this.submitted = true;

		// reset alerts on submit
		// this.alertService.clear();

		// stop here if form is invalid
		if (this.form.invalid) {
			return;
		}

		this.loading = true;
		this.createTransaction();
	}

	createTransaction() {
		let transaction: ITransactionRequest;
		
		transaction = {
			...this.form.value,
			reciver: { id: 1, email: 'test@example.com' },
			sender: { id: 1, email: 'test@example.com' },
		};

		this.walletService.createTransaction(transaction).subscribe({
			next: () => {
				this.router.navigate(['/']);
			},
			error: (error) => console.error(error),
		});
	}

	// onClickCreditCard(): void {
	// 	this.showCreditCardOptions = !this.showCreditCardOptions;
	// }

	// onClickPaypal(): void {
	// 	this.showPapPalOptions = !this.showPapPalOptions;
	// }
}
