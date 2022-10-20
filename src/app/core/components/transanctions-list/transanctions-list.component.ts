import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransactionResponse } from 'src/app/core/models/transaction-response.model';
import { WalletService } from 'src/app/core/services/wallet.service';
import { IUser } from '../../models/user.model';
import { TransactionOriginPipe } from '../../pipes/transaction-origin.pipe';
import { AuthService } from '../../services/auth/auth.service';

@Component({
    selector: 'app-transanctions-list',
    templateUrl: './transanctions-list.component.html',
    styleUrls: ['./transanctions-list.component.scss'],
    standalone: true,
    imports: [CommonModule, TransactionOriginPipe],
})
export class TransanctionsListComponent implements OnInit {
    transactions$!: Observable<ITransactionResponse[]>;
    user: IUser | null;

    constructor(
		private walletService: WalletService,
		private authService: AuthService
    ) {
        this.user = this.authService.currentUserValue;
    }

    ngOnInit(): void {
        this.transactions$ = this.walletService.getAllTransactions();
    }

    isIncoming(transaction: ITransactionResponse): boolean {
        if (this.user?.id === transaction.reciver.id) {
            return true;
        } else {
            return false;
        }
    }
}
