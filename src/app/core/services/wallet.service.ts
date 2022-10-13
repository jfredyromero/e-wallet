import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../enums/endpoints.enum';
import { ITransactionRequest } from '../models/transaction-request.model';
import { ITransactionResponse } from '../models/transaction-response.model';

@Injectable({
	providedIn: 'root',
})
export class WalletService {
	constructor(private http: HttpClient) {}

	getAllTransactions() {
		return this.http.get<ITransactionResponse[]>(`${environment.apiUrl}${Endpoints.transactions}`);
	}

	createTransaction(transaction: ITransactionRequest) {
		return this.http.post<ITransactionResponse>(
			`${environment.apiUrl}${Endpoints.transactions}`,
			transaction
		);
	}
}
