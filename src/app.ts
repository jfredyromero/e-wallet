import { router } from './router/router.js';
import navbarComponent from './components/navbar/navbar.component.js';
import footerComponent from './components/footer/footer.component.js';

const init = (): void => {
	navbarComponent();
	footerComponent();
	router(window.location.hash);

	window.addEventListener('hashchange', () => {
		router(window.location.hash);
	});
};

window.addEventListener('load', init);
