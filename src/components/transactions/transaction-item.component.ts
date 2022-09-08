// import homeViewTemplate from '../views/home.html?raw';
import { ITransaction } from '../../models/transaction.model.js';

export default (transaction: ITransaction): string => {
	let transactionItem = '';

	transactionItem += `
        <article class="transaction-item">
        <h2 class="transaction-item__account">${transaction.account}</h2>
        <p class="transaction-item__amount--${
	transaction.incoming ? 'incoming' : 'outcoming'}">${transaction.amount}</p>
        </article>`;

	return transactionItem;
};
