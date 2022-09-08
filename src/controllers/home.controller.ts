// import homeViewTemplate from '../views/home.html?raw';
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
	sectionElement.innerHTML = html;

	return sectionElement;
};
