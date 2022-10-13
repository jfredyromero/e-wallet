import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { TransactionsAddComponent } from './transactions-add.component';

const routes: Routes = [
	{
		path: '',
		component: TransactionsAddComponent,
		canActivate: [AuthGuard]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TransactionsAddRoutingModule {}
