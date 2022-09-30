import loginViewTemplate from '../views/login.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = loginViewTemplate;
	return sectionElement;
};
