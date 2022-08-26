import notFountViewTemplate from '../views/not-found.html?raw';

export default (): HTMLDivElement => {
	const divElement = document.createElement('div');
	divElement.innerHTML = notFountViewTemplate;
	return divElement;
};
