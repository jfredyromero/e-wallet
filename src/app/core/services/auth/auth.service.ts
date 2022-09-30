import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoints } from '../../enums/endpoints.enum';
import { environment } from '../../../../environments/environment';
import { IUser } from '../../models/user.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}
	login(user: IUser): Observable<any> {
		return this.http.post<any>(environment.apiUrl + Endpoints.login, user);
	}
	register(): Observable<any> {
		return this.http.get<any>(environment.apiUrl + Endpoints.registration);
	}
}
