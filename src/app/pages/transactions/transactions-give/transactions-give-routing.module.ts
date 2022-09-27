import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsGiveComponent } from './transactions-give.component';

const routes: Routes = [
	{
		path: '',
		component: TransactionsGiveComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionsGiveRoutingModule {}
