import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { IBalance } from '../../models/balance.model';
import { WalletService } from '../../services/wallet.service';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
	standalone: true,
	imports: [RouterModule, CommonModule],
})
export class HeroComponent implements OnInit {
	balance$!: Observable<IBalance>;

	constructor(private walletService: WalletService) {}

	ngOnInit(): void {
		this.balance$ = this.walletService.getBalance();
	}
}
