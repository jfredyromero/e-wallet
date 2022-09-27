import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions-add',
  templateUrl: './transactions-add.component.html',
  styleUrls: ['./transactions-add.component.scss']
})
export class TransactionsAddComponent implements OnInit {

  showCreditCardOptions = false;
  showPapPalOptions = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onClickCreditCard(): void {
    this.showCreditCardOptions = !this.showCreditCardOptions;
  }

  onClickPaypal(): void {
    this.showPapPalOptions = !this.showPapPalOptions;
  }
}
