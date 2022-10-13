import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { IUser } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
	selector: 'app-transactions-give',
	templateUrl: './transactions-give.component.html',
	styleUrls: ['./transactions-give.component.scss'],
})
export class TransactionsGiveComponent implements OnInit {
	credencial: string | null;
	accessToken: string;
	$users!: Observable<IUser[]>;
	form!: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private router: Router,
		private userService: UserService,
		private formBuilder: FormBuilder
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
		this.$users = this.userService.getAll();
	}

	initForm() {
		this.form = this.formBuilder.group({
			reciver: [null, Validators.required],
			amount: [null, Validators.required],
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.form.controls;
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
		console.log(this.form.value);
	}
}
