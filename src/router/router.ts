import { controllers } from '../controllers/index';
import addService from '../services/add.service';

const router = (route: string): void => {
	const content = document.getElementById('app');
	content!.innerHTML = '';

	switch (route) {
	case '': {
			content!.appendChild(controllers.home());
			break;
	}
	case '#/': {
			content!.appendChild(controllers.home());
			break;
	}
	case '#/add': {
			content!.appendChild(controllers.add());
			addService();
			break;
	}
	case '#/give': {
			content!.appendChild(controllers.give());
			break;
	}
	case '#/transactions': {
			content!.appendChild(controllers.transactions());
			break;
	}
	case '#/login': {
			content!.appendChild(controllers.login());
			break;
	}
	case '#/sign-up': {
			content!.appendChild(controllers.signup());
			break;
	}
	case '#/registration': {
			content!.appendChild(controllers.registration());
			break;
	}
	default: {
			content!.appendChild(controllers.notFound());
			break;
	}
	}
};

export { router };
