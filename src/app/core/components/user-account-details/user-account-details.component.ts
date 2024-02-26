import { Component, OnInit } from '@angular/core';
import { UserListItem } from 'src/app/core/interfaces/userInterface';
import { UserMockService } from 'src/app/core/services/user-mock.service';

@Component({
  selector: 'app-user-account-details',
  templateUrl: './user-account-details.component.html',
  styleUrls: ['./user-account-details.component.css']
})
export class UserAccountDetailsComponent implements OnInit {

  registerUser!: UserListItem;

  constructor(private service: UserMockService) { }

  ngOnInit() {
    this.registerUser = this.service.userList[0];
  }

}
