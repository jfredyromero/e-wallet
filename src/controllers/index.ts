import HomeController from './home.controller';
import AddController from './add.controller';
import GiveController from './give.controller';
import TransactionsController from './transactions.controller';
import NotFoundController from './not-found.controller';

const controllers = {
	home: HomeController,
	add: AddController,
	give: GiveController,
	transactions: TransactionsController,
	notFound: NotFoundController,
};

export { controllers };
