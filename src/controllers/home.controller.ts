import homeViewTemplate from '../views/home.html?raw';

export default (): HTMLElement => {
	const divElement = document.createElement('section');
	divElement.innerHTML = homeViewTemplate;

	const btnClick = divElement.querySelector('#btn-click');
	btnClick!.addEventListener('click', () => {
		alert('clicked!');
	});

	return divElement;
};
