import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITransaction } from '../models/transaction.model';

@Injectable({
	providedIn: 'root',
})
export class WalletService {
	private transactionsMock: ITransaction[] = [
		{
			id: 1,
			account: 'one@example.com',
			amount: '$100.00',
			incoming: true,
			createdAt: '07/09/2022',
		},
		{
			id: 2,
			account: 'two@example.com',
			amount: '-$200.00',
			incoming: false,
			createdAt: '07/09/2022',
		},
		{
			id: 3,
			account: 'three@example.com',
			amount: '$300.00',
			incoming: true,
			createdAt: '07/09/2022',
		},
		{
			id: 4,
			account: 'four@example.com',
			amount: '-$400.00',
			incoming: false,
			createdAt: '07/09/2022',
		},
		{
			id: 5,
			account: 'five@example.com',
			amount: '$500.00',
			incoming: true,
			createdAt: '07/09/2022',
		},
		{
			id: 6,
			account: 'six@example.com',
			amount: '$600.00',
			incoming: true,
			createdAt: '07/09/2022',
		},
	];
	constructor() {}

	getAllTransactions(): Observable<ITransaction[]> {
		return of(this.transactionsMock);
	}
}
