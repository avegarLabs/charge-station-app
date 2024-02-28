import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserListItem } from '../interfaces/userInterface';
import { Observable } from 'rxjs';
import { user_rote } from '../util/api-routes';
import { StationUseResponse } from '../interfaces/charge-station';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }


getUserByMoniker(moniker:string): Observable<UserListItem>{
  return this.http.get<UserListItem>(`${user_rote}/details/${moniker}`);
}

chargesByUser(userId:string): Observable<StationUseResponse[]>{
  return this.http.get<StationUseResponse[]>(`${user_rote}/activity/${userId}`);

}


}
