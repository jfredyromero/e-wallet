import { controllers } from '../controllers/index';

const router = (route: string): HTMLElement => {
	const content = document.getElementById('app');
  content!.innerHTML = '';

  switch (route) {
  case '': {
  	return content!.appendChild(controllers.home());
  }
  case '#/': {
  	return content!.appendChild(controllers.home());
  }
  case '#/wallet': {
  	return content!.appendChild(controllers.wallet());
  }
  case '#/demo': {
  	return content!.appendChild(controllers.demo());
  }
  default: {
  	return content!.appendChild(controllers.notFound());
  }
  }
};

export { router };
