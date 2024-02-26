import { Injectable } from '@angular/core';
import { UserListItem } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root',
})
export class UserMockService {
  userList: UserListItem[] = [];

  constructor() {
    const admin: UserListItem = {
      id: '65d67bbec6b1600c23e1dbaa',
      name: 'Alfredo Vega Ramírez',
      username: 'avegar',
      email: 'alfredovegaramiraz@gmail.com',
      password: 'teqtrwtyreytwrqyterqwytrye',
      roleList: ['ROLE_USER', 'ROLE_ADMIN'],
      moniker: 'alfredo-vega-ramirez',
    };

    const user: UserListItem = {
      id: '65d67bbec6b1600c23e1dbaa',
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
