import { Pipe, PipeTransform } from '@angular/core';
import { ITransactionResponse } from '../models/transaction-response.model';
import { IUser } from '../models/user.model';
import { AuthService } from '../services/auth/auth.service';

@Pipe({
	name: 'transactionOrigin',
	standalone: true,
})
export class TransactionOriginPipe implements PipeTransform {
	user: IUser | null;

	constructor(private authService: AuthService) {
		this.user = this.authService.currentUserValue;
	}

	transform(transaction: ITransactionResponse, ...args: unknown[]): unknown {
		if (
			this.user?.id === transaction.reciver.id &&
			transaction.sender.id === this.user?.id
		) {
			return 'Recharge';
		} else if (
			this.user?.id === transaction.sender.id &&
			transaction.reciver.id !== this.user?.id
		) {
			return `Give to: ${transaction.reciver.email}`;
		} else {
			return `From: ${transaction.sender.email}`;
		}
	}
}

// displayOrigin(transaction: ITransactionResponse): any {
//   if (
//     this.user?.id === transaction.reciver.id &&
//     transaction.sender.id === this.user?.id
//   ) {
//     return 'Recharge:';
//   } else if (
//     this.user?.id === transaction.sender.id &&
//     transaction.reciver.id !== this.user?.id
//   ) {
//     return 'Give to:'
//   } else {
//     return 'From:'
//   }
// }
