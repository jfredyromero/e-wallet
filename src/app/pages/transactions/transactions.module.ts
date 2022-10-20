import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsGiveComponent } from './transactions-give/transactions-give.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TransactionsGiveComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TransactionsRoutingModule
    ]
})
export class TransactionsModule { }
