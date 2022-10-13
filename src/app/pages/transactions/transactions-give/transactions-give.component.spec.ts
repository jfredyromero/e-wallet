import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { TransactionsGiveComponent } from './transactions-give.component';

describe('TransactionsGiveComponent', () => {
	let component: TransactionsGiveComponent;
	let fixture: ComponentFixture<TransactionsGiveComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TransactionsGiveComponent],
			imports: [HttpClientModule, ReactiveFormsModule],
		}).compileComponents();

		fixture = TestBed.createComponent(TransactionsGiveComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
