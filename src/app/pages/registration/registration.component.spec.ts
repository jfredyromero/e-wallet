import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
	let component: RegistrationComponent;
	let fixture: ComponentFixture<RegistrationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RegistrationComponent],
			imports: [HttpClientModule, ReactiveFormsModule],
		}).compileComponents();

		fixture = TestBed.createComponent(RegistrationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
