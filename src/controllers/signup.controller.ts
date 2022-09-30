import signupViewTemplate from '../views/signup.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = signupViewTemplate;
	return sectionElement;
};
