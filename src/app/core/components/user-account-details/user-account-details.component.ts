import { Component, OnInit } from '@angular/core';
import { UserListItem } from 'src/app/core/interfaces/userInterface';
import { StationUseResponse } from '../../interfaces/charge-station';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-account-details',
  templateUrl: './user-account-details.component.html',
  styleUrls: ['./user-account-details.component.css']
})
export class UserAccountDetailsComponent implements OnInit {

  registerUser!: UserListItem;
  usesList!:StationUseResponse[];
  showRecords: boolean = false;
  moniker!:string; 

  constructor(
    private service: UserService,
    private actRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.moniker = this.actRoute.snapshot.params['moniker'];
    this.loadUser(this.moniker);
  }


  loadUser(moniker: string) {
    return this.service.getUserByMoniker(moniker).subscribe((data:UserListItem) => {
      if(data){
        this.registerUser = data;
      }
    })
  }

  showUserRecords(){
   return this.service.chargesByUser(this.registerUser.id).subscribe((data:StationUseResponse[]) =>{
      if(data){
        console.log(data)
        this.usesList = data;
        this.showRecords = true;
      }
    })
  }




}
