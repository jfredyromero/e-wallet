import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from 'src/app/models/transaction.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-transanctions-list',
  templateUrl: './transanctions-list.component.html',
  styleUrls: ['./transanctions-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TransanctionsListComponent implements OnInit {
  
  transactions$: Observable<ITransaction[]> | null = null;

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.transactions$ = this.walletService.getAllTransactions();
  }
}
