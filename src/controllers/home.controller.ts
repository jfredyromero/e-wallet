import homeViewTemplate from '../views/home.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = homeViewTemplate;
	return sectionElement;
};
