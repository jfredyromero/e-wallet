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
	// {
	// 	path: ':id',
	// 	loadChildren: () =>
	// 		import('../client-detail/client-detail.module').then(
	// 			(m) => m.ClientDetailPageModule
	// 		),
	// },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionsRoutingModule {}
