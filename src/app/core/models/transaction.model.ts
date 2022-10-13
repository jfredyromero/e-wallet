export interface ITransaction {
	id: number;
	account: string;
	amount: string;
	incoming: boolean;
	createdAt: string;
}


export interface ITransactionRequest {
	sender: IUserTransaction;
	reciver: IUserTransaction;
	amount: number;
}
// export interface ITransaction {
// 	id?: number;
// 	sender: IUserTransaction;
// 	reciver: IUserTransaction;
// 	amount: number;
// 	createdAt: string;
// }

export interface IUserTransaction {
	id: number;
	email: string;
}