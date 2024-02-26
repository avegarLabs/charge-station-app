import { Injectable } from '@angular/core';
import { UserListItem } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class UserMockService {
  userList: UserListItem[] = [];

  constructor() {
    const admin: UserListItem = {
      id: '878779879797',
      name: 'Alfredo Vega Ramírez',
      username: 'avegar',
      email: 'alfredovegaramiraz@gmail.com',
      password: 'teqtrwtyreytwrqyterqwytrye',
      roleList: ['ROLE_USER', 'ROLE_ADMIN'],
      moniker: 'alfredo-vega-ramirez',
    };

    const user: UserListItem = {
      id: '878779879797',
      name: 'Odet Lopez Batista',
      username: 'odet',
      email: 'odetlopez@gmail.com',
      password: 'teqtrwtyreytwrqyterqwytrye',
      roleList: ['ROLE_USER'],
      moniker: 'odet-lopez-batista',
    };
    this.userList.push(admin);
    this.userList.push(user);
  }

  
}
