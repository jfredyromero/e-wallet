import walletViewTemplate from '../views/wallet.html?raw';

export default (): HTMLDivElement => {
	const divElement = document.createElement('div');
	divElement.innerHTML = walletViewTemplate;
	return divElement;
};
