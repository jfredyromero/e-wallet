import registrationViewTemplate from '../views/registration.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = registrationViewTemplate;
	return sectionElement;
};
