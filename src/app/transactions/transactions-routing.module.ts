import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./transactions-home/transactions-home.module').then(
				(m) => m.TransactionsListModule
			),
	},
	{
		path: 'add',
		loadChildren: () =>
			import('./transactions-add/transactions-add.module').then(
				(m) => m.TransactionsAddModule
			),
	},
	{
		path: 'give',
		loadChildren: () =>
			import('./transactions-give/transactions-give.module').then(
				(m) => m.TransactionsGiveModule
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionsRoutingModule {}
