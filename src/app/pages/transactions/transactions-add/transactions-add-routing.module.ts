import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsAddComponent } from './transactions-add.component';

const routes: Routes = [
	{
		path: '',
		component: TransactionsAddComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionsAddRoutingModule {}
