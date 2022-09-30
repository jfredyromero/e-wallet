import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'login',
		loadChildren: () =>
			import('./pages/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'registration',
		loadChildren: () =>
			import('./pages/registration/registration.module').then(
				(m) => m.RegistrationModule
			),
	},
	{
		path: 'transactions',
		loadChildren: () =>
			import('./pages/transactions/transactions.module').then(
				(m) => m.TransactionsModule
			),
	},
	{
		path: 'not-found',
		loadComponent: () =>
			import('./core/components/not-found/not-found.component').then(
				(c) => c.NotFoundComponent
			),
	},
	{ path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}