// const jsonServer = require('json-server');
// const bodyParser = require('body-parser');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const db = router.db;
// const middlewares = jsonServer.defaults();
// const PORT = process.env.PORT || 3000;

// server.use(bodyParser.urlencoded({ extended: true }));
// server.use(bodyParser.json());
// server.use(middlewares);

// server.post('/test', (req, res) => {
// 	res.status(200).json({ message: 'Custom Route'});

// })

// server.post('/transactions/add', (req, res) => {
// 	const { sender, reciver, amount } = req.body;

// 	console.log({ sender });
// 	console.log({ reciver });

// 	const senderUser = db.get('users').find({ id: sender.id }).value();
// 	const reciverUser = db.get('users').find({ id: reciver.id }).value();
// 	const transactions = db.get('transactions').value();

// 	if (!senderUser || !reciverUser) {
// 		res.status(404).json({ message: 'Not found user' });
// 	}

// 	senderUser.budget -= amount;
// 	reciverUser.budget += amount;

// 	console.log({ senderUser });
// 	console.log({ reciverUser });

// 	transactions.push({
// 		sender: sender,
// 		reciver: reciver,
// 		amount: amount,
// 		createdAt: new Date(),
// 	});

// 	db.write();

// 	res.status(201).json({});
// });

// server.post('/transactions/add', (req, res) => {
// 	const { userId, amount } = req.body;
// 	const user = db.get('users').find({ id: userId }).value();
// 	const transactions = db.get('transactions').value();

//   if (!user) {
// 	  res.status(404).json({});
//   }

// 	user.budget += amount;

// 	transactions.push({
// 		senderId: userId,
// 		reciverId: userId,
// 		amount: amount,
// 		createdAt: new Date(),
// 	});

// 	db.write();

//   res.status(201).json({});
// });

// server.use(router);

// server.listen(PORT, () => {
// 	console.log(`JSON Server is running on port ${PORT}`);
// });

const path = require('path');
const { v4: uuidv4 } = require('uuid');
const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const auth = require('json-server-auth');

const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const db = router.db;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(middlewares);

server.db = router.db;

server.get('/healthcheck', (req, res) => {
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

	if (sender.id === reciver.id) {
		reciverUser.budget += amount;
	}

	console.log({ senderUser });
	console.log({ reciverUser });

	transactions.push({
		id: uuidv4(),
		sender: sender,
		reciver: reciver,
		amount: amount,
		createdAt: new Date(),
	});

	db.write();

	res.status(201).json({});
});

server.use(auth);
server.use(router);

server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
