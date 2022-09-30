import HomeController from './home.controller';
import AddController from './add.controller';
import GiveController from './give.controller';
import TransactionsController from './transactions.controller';
import NotFoundController from './not-found.controller';
import LoginController from './login.controller';
import SignupController from './signup.controller';
import RegistrationController from './registration.controller';

const controllers = {
	home: HomeController,
	add: AddController,
	give: GiveController,
	transactions: TransactionsController,
	notFound: NotFoundController,
	login: LoginController,
	signup: SignupController,
	registration: RegistrationController,
};

export { controllers };
