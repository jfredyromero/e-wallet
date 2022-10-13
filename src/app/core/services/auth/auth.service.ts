import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable, of, ReplaySubject } from 'rxjs';
import { Endpoints } from '../../enums/endpoints.enum';
import { environment } from '../../../../environments/environment';
import { IAuthRequest } from '../../models/auth-request.model';
import { IAuthResponse } from '../../models/auth-response.model';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private currentUserSubject: BehaviorSubject<IUser | null>;
	public currentUser$: Observable<IUser | null>;

	constructor(private http: HttpClient, private router: Router) {
		// @ts-ignore
		const currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.currentUserSubject = new BehaviorSubject<IUser | null>(
			currentUser
		);
		this.currentUser$ = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): IUser | null {
		return this.currentUserSubject.value;
	}

	login(user: IAuthRequest) {
		return this.http
			.post<IAuthResponse>(`${environment.apiUrl}login`, user)
			.pipe(
				map((response) => {
					if (response.accessToken && response.user) {
						localStorage.setItem(
							'accessToken',
							response.accessToken
						);
						localStorage.setItem(
							'currentUser',
							JSON.stringify(response.user)
						);
						this.currentUserSubject.next(response.user);
					}
				})
			);
	}

	logout() {
		localStorage.removeItem('currentUser');
		localStorage.removeItem('accessToken');
		this.currentUserSubject.next(null);
	}

	// register(): Observable<any> {
	// 	return this.http.get<any>(environment.apiUrl + Endpoints.registration);
	// }
}
