import HomeController from './home.controller.js';
import WalletController from './wallet.controller.js';
import DemoController from './demo.controller.js';
import NotFoundController from './not-found.controller.js';

const controllers = {
	home: HomeController,
	wallet: WalletController,
	demo: DemoController,
	notFound: NotFoundController,
};

export { controllers };
