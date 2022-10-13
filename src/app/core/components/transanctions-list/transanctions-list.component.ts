import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransactionResponse } from 'src/app/core/models/transaction-response.model';
import { WalletService } from 'src/app/core/services/wallet.service';

@Component({
  selector: 'app-transanctions-list',
  templateUrl: './transanctions-list.component.html',
  styleUrls: ['./transanctions-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TransanctionsListComponent implements OnInit {
  
  transactions$!: Observable<ITransactionResponse[]>;

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.transactions$ = this.walletService.getAllTransactions();
  }

  isIncoming(transaction: ITransactionResponse): boolean {
    if (transaction.sender.id === transaction.reciver.id) {
      return true;
    } else {
      return false;
    }
  }
}
