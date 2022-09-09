import homeTemplate from '../views/home.html?raw';
import transactionItemComponent 
	from '../components/transactions/transaction-item.component.js';
import { getAllTransactions } from '../services/wallet.service.js';

export default (): HTMLElement => {
	const transactions = getAllTransactions();
	let html = '';
	transactions.forEach(transaction => {
		html += transactionItemComponent(transaction);
	});

	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = homeTemplate;

	const transactionListElement = sectionElement
		.getElementsByClassName('transactions-list');
	console.log(transactionListElement);
	transactionListElement[0].innerHTML = html;

	return sectionElement;
};
