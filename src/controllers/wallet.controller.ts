import walletViewTemplate from '../views/wallet.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = walletViewTemplate;
	return sectionElement;
};
