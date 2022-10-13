import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ITransactionRequest } from 'src/app/core/models/transaction-request.model';
import { IUser } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { WalletService } from 'src/app/core/services/wallet.service';

@Component({
	selector: 'app-transactions-give',
	templateUrl: './transactions-give.component.html',
	styleUrls: ['./transactions-give.component.scss'],
})
export class TransactionsGiveComponent implements OnInit {
	currentUser!: IUser | null;
	$users!: Observable<IUser[]>;
	form!: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private router: Router,
		private userService: UserService,
		private authService: AuthService,
		private walletService: WalletService,
		private formBuilder: FormBuilder
	) {
		this.currentUser = this.authService.currentUserValue;
		this.initForm();
	}

	ngOnInit(): void {
		this.$users = this.userService.getAll();
	}

	initForm() {
		this.form = this.formBuilder.group({
			reciver: [null, Validators.required],
			amount: [null, [Validators.required, Validators.min(0.1)]],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
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
		const { amount, reciver } = this.form.value;

		if (this.currentUser) {
			transaction = {
				sender: {
					id: this.currentUser?.id,
					email: this.currentUser?.email,
				},
				reciver: { id: reciver.id, email: reciver.email },
				amount,
			};

			this.walletService.createTransaction(transaction).subscribe({
				next: () => {
					this.router.navigate(['/']);
				},
				error: (error) => console.error(error),
			});
		}
	}
}
