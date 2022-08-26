import demoViewTemplate from '../views/demo.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = demoViewTemplate;
	return sectionElement;
};
