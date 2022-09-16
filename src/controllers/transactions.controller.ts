import transactionsViewTemplate from '../views/transactions.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = transactionsViewTemplate;
	return sectionElement;
};
