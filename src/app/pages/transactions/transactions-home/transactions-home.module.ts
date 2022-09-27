import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsHomeComponent } from './transactions-home.component';
import { TransactionsListRoutingModule } from './transactions-home-routing.module';
import { TransanctionsListComponent } from 'src/app/core/components/transanctions-list/transanctions-list.component';

@NgModule({
	declarations: [TransactionsHomeComponent],
	imports: [
		CommonModule,
		TransactionsListRoutingModule,
		TransanctionsListComponent,
	],
})
export class TransactionsListModule {}
