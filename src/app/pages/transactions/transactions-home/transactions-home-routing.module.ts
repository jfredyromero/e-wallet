import { NgModule } from '@angular/core';
import { TransactionsHomeComponent } from './transactions-home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		component: TransactionsHomeComponent,
		canActivate: [AuthGuard],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionsListRoutingModule {}
