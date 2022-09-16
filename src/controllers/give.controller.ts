import giveViewTemplate from '../views/give.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = giveViewTemplate;
	return sectionElement;
};
