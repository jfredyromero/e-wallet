import { Component } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthRequest } from 'src/app/core/models/auth-request.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    form!: FormGroup;
    submitted: boolean;

    constructor(
		private authService: AuthService,
		private userService: UserService,
		private router: Router,
		private formBuilder: FormBuilder
    ) {
        this.submitted = false;
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group(
            {
                email: [null, [Validators.required, Validators.email]],
                password: [null, Validators.required],
                passwordConfirm: [null, Validators.required],
            },
            {
                validator: this.passwordMatchingValidator,
            }
        );
    }

    passwordMatchingValidator: ValidatorFn = (
        control: AbstractControl
    ): ValidationErrors | null => {
        const passwordMatching: boolean =
			control.get('password')?.value !==
			control.get('passwordConfirm')?.value;
        return passwordMatching ? { invalidPasswordConfirmation: true } : null;
    };

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    registrate(): void {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        const newUser: IAuthRequest = {
            email: this.form.controls['email'].value,
            password: this.form.controls['password'].value,
        };
        this.userService.register(newUser).subscribe({
            next: (response) => {
                this.router.navigate(['/login']);
            },
            error: (error) => console.error(error),
        });
    }
}
