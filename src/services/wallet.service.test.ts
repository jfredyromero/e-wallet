import { describe, it, expect } from 'vitest';
import { getAllTransactions } from './wallet.service';

describe('#walletService', () => {
	describe('#getAllTransactions', () => {
		it('should must return 6 objects', () => {
			const transactions = getAllTransactions();
			expect(transactions.length).toEqual(6);
		});

		it('should return one@example.com the first object', () => {
			const transactions = getAllTransactions();
			expect(transactions[0].account).toEqual('one@example.com');
		});
	});
});
