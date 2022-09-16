import addViewTemplate from '../views/add.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = addViewTemplate;
	return sectionElement;
};
