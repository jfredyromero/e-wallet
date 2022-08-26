import homeViewTemplate from '../views/home.html?raw';

export default (): HTMLElement => {
	const sectionElement = document.createElement('section');
	sectionElement.innerHTML = homeViewTemplate;

	const btnClick = sectionElement.querySelector('#btn-click');
	btnClick!.addEventListener('click', () => {
		alert('clicked!');
	});

	return sectionElement;
};
