import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITransactionRequest } from 'src/app/core/models/transaction-request.model';
import { IUser } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { WalletService } from 'src/app/core/services/wallet.service';

@Component({
	selector: 'app-transactions-add',
	templateUrl: './transactions-add.component.html',
	styleUrls: ['./transactions-add.component.scss'],
})
export class TransactionsAddComponent implements OnInit {
	showCreditCardOptions = false;
	showPapPalOptions = false;

	currentUser!: IUser | null;
	form!: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private walletService: WalletService,
		private authService: AuthService
	) {
		this.currentUser = this.authService.currentUserValue;
		this.initForm();
	}

	ngOnInit(): void {}

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

		// stop here if form is invalid
		if (this.form.invalid) {
			return;
		}

		this.loading = true;
		this.createTransaction();
	}

	createTransaction() {
		let transaction: ITransactionRequest;

		if (this.currentUser) {
			transaction = {
				...this.form.value,
				reciver: {
					id: this.currentUser?.id,
					email: this.currentUser?.email,
				},
				sender: {
					id: this.currentUser?.id,
					email: this.currentUser?.email,
				},
			};

			this.walletService.createTransaction(transaction).subscribe({
				next: () => {
					this.router.navigate(['/']);
				},
				error: (error) => console.error(error),
			});
		}
	}

	// onClickCreditCard(): void {
	// 	this.showCreditCardOptions = !this.showCreditCardOptions;
	// }

	// onClickPaypal(): void {
	// 	this.showPapPalOptions = !this.showPapPalOptions;
	// }
}
