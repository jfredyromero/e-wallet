import navbarViewTemplate from './navbar.component.html?raw';

export default (): void => {
	const headerElement = document.getElementById('header');
  headerElement!.innerHTML = navbarViewTemplate;
};
