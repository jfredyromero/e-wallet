import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsAddComponent } from './transactions-add.component';
import { TransactionsAddRoutingModule } from './transactions-add-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransactionsAddComponent
  ],
  imports: [
    CommonModule,
    TransactionsAddRoutingModule,
    ReactiveFormsModule,
  ]
})
export class TransactionsAddModule { }
