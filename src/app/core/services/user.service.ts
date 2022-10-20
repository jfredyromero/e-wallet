import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../enums/endpoints.enum';
import { IAuthRequest } from '../models/auth-request.model';
import { IUser } from '../models/user.model';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<IUser[]>(environment.apiUrl + Endpoints.users);
    }

    register(user: IAuthRequest) {
        return this.http.post<any>(`${environment.apiUrl}signup`, user).pipe(
            map((response) => {
                console.log(response);
            })
        );
    }
}
