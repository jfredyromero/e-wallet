import notFountViewTemplate from '../views/not-found.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = notFountViewTemplate;
	return sectionElement;
};
