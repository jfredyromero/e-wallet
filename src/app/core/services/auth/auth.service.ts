import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoints } from '../../enums/endpoints.enum';
import { environment } from '../../../../environments/environment';
import { IAuthRequest } from '../../models/authRequest.model';
import { IAuthResponse } from '../../models/authResponse.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}
	login(user: IAuthRequest): Observable<IAuthResponse> {
		return this.http.post<IAuthResponse>(
			environment.apiUrl + Endpoints.login,
			user
		);
	}
	register(): Observable<any> {
		return this.http.get<any>(environment.apiUrl + Endpoints.registration);
	}
}
