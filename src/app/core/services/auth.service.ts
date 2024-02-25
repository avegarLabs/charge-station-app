import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterModel, UserListItem } from '../interfaces/userInterface';
import { auth_rote } from '../util/api-routes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  newUser(userModel: RegisterModel): Observable<UserListItem> {
    return this.http.post<UserListItem>(`${auth_rote}/register`, userModel);
  }
}
