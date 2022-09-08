import { ITransaction } from '../models/transaction.model';

const getAllTransactions = (): ITransaction[] => {
	return [
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
			amount: '$200.00',
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
			amount: '$400.00',
			incoming: false,
			createdAt: '07/09/2022',
		},
	];
};

export { getAllTransactions };
