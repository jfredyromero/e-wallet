import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { TransactionsGiveComponent } from './transactions-give.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionsGiveComponent,
        canActivate: [AuthGuard]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TransactionsGiveRoutingModule {}
