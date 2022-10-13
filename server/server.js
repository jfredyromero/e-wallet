const path = require('path');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const auth = require('json-server-auth');

const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const db = router.db;
// const JWT_SECRET_KEY = 'json-server-auth-123456'

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(middlewares);

server.db = router.db;

server.get('/healthcheck', (req, res) => {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	const user = jwt.decode(token);
	console.log({ id: user.sub, email: user.email });

	res.status(200).json({ message: 'OK' });
});

server.post('/transactions', (req, res) => {
	const { sender, reciver, amount } = req.body;

	console.log({ sender });
	console.log({ reciver });
	console.log({ amount });

	const senderUser = db.get('users').find({ id: sender.id }).value();
	const reciverUser = db.get('users').find({ id: reciver.id }).value();
	const transactions = db.get('transactions').value();

	if (!senderUser || !reciverUser) {
		res.status(404).json({ message: 'Not found user' });
	}

	reciverUser.budget = reciverUser.budget
		? reciverUser.budget + amount
		: amount;
	if (sender.id !== reciver.id) {
		senderUser.budget = senderUser.budget
			? senderUser.budget - amount
			: amount;
	}

	console.log({ senderUser });
	console.log({ reciverUser });

	const transaction = {
		id: uuidv4(),
		sender: sender,
		reciver: reciver,
		amount: amount,
		createdAt: new Date(),
	};

	transactions.push(transaction);

	db.write();

	res.status(201).json(transaction);
});

server.get('/transactions', (req, res) => {
	const transactions = db.get('transactions').value() || [];
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	const { sub: userId, email } = jwt.decode(token);

	console.log({ id: userId, email });

	const transactionsResponse = transactions
		.filter((transaction) => {
			if (
				transaction.reciver.id === parseInt(userId) ||
				transaction.sender.id === parseInt(userId)
			) {
				return transaction;
			}
		})
		.sort(function (a, b) {
			return new Date(b.createdAt) - new Date(a.createdAt);
		});

	res.status(200).json(transactionsResponse);
});

server.get('/transactions/balance', (req, res) => {
	let transactions = db.get('transactions').value() || [];
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	const { sub: userId, email } = jwt.decode(token);

	console.log({ id: userId, email });

	const user = db
		.get('users')
		.find({ id: parseInt(userId) })
		.value();

	transactions = transactions.filter((transaction) => {
		if (
			transaction.reciver.id === parseInt(userId) ||
			transaction.sender.id === parseInt(userId)
		) {
			return transaction;
		}
	});

	const incoming = transactions
		.filter((transaction) => {
			if (transaction.reciver.id === parseInt(userId)) {
				return transaction;
			}
		})
		.reduce((total, transaction) => {
			return total + transaction.amount;
		}, 0);

	const outcoming = transactions
		.filter((transaction) => {
			if (
				transaction.sender.id === parseInt(userId) &&
				transaction.reciver.id !== parseInt(userId)
			) {
				return transaction;
			}
		})
		.reduce((total, transaction) => {
			return total + transaction.amount;
		}, 0);

	const balance = {
		balance: user.budget,
		incoming,
		outcoming,
	};

	res.status(200).json(balance);
});

server.get('/users', (req, res) => {
	const users = db.get('users').value() || [];
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (token == null) return res.sendStatus(401);

	const { sub: userId, email } = jwt.decode(token);

	console.log({ id: userId, email });

	const usersResponse = users.filter((user) => {
		if (user.id !== parseInt(userId)) {
			return user;
		}
	});

	res.status(200).json(usersResponse);
});

server.use(auth);
server.use(router);

server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
