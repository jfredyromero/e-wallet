import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoints } from '../../enums/endpoints.enum';
import { environment } from '../../../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private http: HttpClient) {}
	login(): Observable<any> {
		return this.http.get<any>(environment.apiUrl + Endpoints.login);
	}
	register(): Observable<any> {
		return this.http.get<any>(environment.apiUrl + Endpoints.registration);
	}
}
