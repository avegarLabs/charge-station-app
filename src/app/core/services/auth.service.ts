import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RegisterModel, UserListItem } from '../interfaces/userInterface';
import { auth_rote } from '../util/api-routes';
import { AuthCredentials, JwtToken } from '../interfaces/authCredentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  activeUser!:UserListItem;

  constructor(private http: HttpClient) {}

  newUser(userModel: RegisterModel): Observable<UserListItem> {
    return this.http.post<UserListItem>(`${auth_rote}/register`, userModel);
  }

  login(credential: AuthCredentials):Observable<JwtToken>{
    return this.http.post<JwtToken>(`${auth_rote}/authenticate`, credential);
  }

  getActiveUser():Observable<UserListItem>{
    return this.http.get<UserListItem>(`${auth_rote}/active`);
   }
  
}
