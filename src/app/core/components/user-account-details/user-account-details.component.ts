import { Component, OnInit } from '@angular/core';
import { UserListItem } from 'src/app/core/interfaces/userInterface';
import { ChargeStationService } from '../../services/charge-station.service';
import { StationUseResponse } from '../../interfaces/charge-station';
import { UserMockService } from 'src/app/core/services/user-mock.service';

@Component({
  selector: 'app-user-account-details',
  templateUrl: './user-account-details.component.html',
  styleUrls: ['./user-account-details.component.css']
})
export class UserAccountDetailsComponent implements OnInit {

  registerUser!: UserListItem;
  usesList!:StationUseResponse[];
  showRecords: boolean = false;

  constructor(
    private service: UserMockService,
    private stationService: ChargeStationService
    ) { }

  ngOnInit() {
    this.registerUser = this.service.userList[0];
  }

  showUserRecords(){
    console.log(this.registerUser.id)
    return this.stationService.chargesByUser(this.registerUser.id).subscribe((data:StationUseResponse[]) =>{
      if(data){
        this.usesList = data;
        this.showRecords = true;
      }
    })
  }




}
