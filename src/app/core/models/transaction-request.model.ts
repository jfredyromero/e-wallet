import { ITransactionUser } from "./transaction-user.model";

export interface ITransactionRequest {
	sender: ITransactionUser;
	reciver: ITransactionUser;
	amount: number;
}