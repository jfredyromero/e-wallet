import { NgModule } from '@angular/core';
import { TransactionsHomeComponent } from './transactions-home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: TransactionsHomeComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionsListRoutingModule {}
