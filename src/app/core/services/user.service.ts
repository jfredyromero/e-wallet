import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../enums/endpoints.enum';
import { IUser } from '../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor(private http: HttpClient) {}

	getAll() {
		// TODO - Remove current users logged in
		return this.http.get<IUser[]>(environment.apiUrl + Endpoints.users);
	}
}
