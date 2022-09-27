export interface ITransaction {
	id: number;
	account: string;
	amount: string;
	incoming: boolean;
	createdAt: string;
}
