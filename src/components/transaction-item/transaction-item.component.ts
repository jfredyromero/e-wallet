// import homeViewTemplate from '../views/home.html?raw';
import { ITransaction } from '../../models/transaction.model.js';

export default (transaction: ITransaction): string => {
	let transactionItem = '';
	transactionItem += `
        <article class="card-coin">
					<div class="card-coin__logo">
						<span>
							${transaction.account}
						</span>
						<span class="card-coin__date">
							${transaction.createdAt}
						</span>
					</div>
					<div>
						<span class="material-icons ${transaction.incoming
		? 'text-green' : 'text-red'}"> 
						trending_${transaction.incoming
		? 'up' : 'down'} </span>
					</div>
					<div class="card-coin__price-${transaction.incoming
	 ? 'plus' : 'minus'}">
						<strong>${transaction.amount}</strong>
					</div>
        </article>`;

	return transactionItem;
};
