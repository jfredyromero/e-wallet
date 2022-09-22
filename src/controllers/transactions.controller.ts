import template from '../views/transactions.html?raw';
// eslint-disable-next-line max-len
import transactionItemComponent from '../components/transaction-item/transaction-item.component.js';
import { getAllTransactions } from '../services/wallet.service.js';

export default (): HTMLElement => {
	const transactions = getAllTransactions();
	let html = '';
	transactions.forEach(transaction => {
		html += transactionItemComponent(transaction);
	});

	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = template;

	const transactionListElement =
		sectionElement.getElementsByClassName('transactions-list');
	transactionListElement[0].innerHTML = html;

	return sectionElement;
};
