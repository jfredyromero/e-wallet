import { ITransactionUser } from './transaction-user.model';

export interface ITransactionResponse {
	id: string;
	sender: ITransactionUser;
	reciver: ITransactionUser;
	amount: number;
	createdAt: string;
}
