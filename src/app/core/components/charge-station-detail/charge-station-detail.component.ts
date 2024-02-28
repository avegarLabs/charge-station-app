import { Component, OnInit } from '@angular/core';
import { StationListItem } from '../../interfaces/charge-station';
import { ChargeStationService } from '../../services/charge-station.service';
import { ActivatedRoute } from '@angular/router';
import { StationUseResponse, StationUseModel } from '../../interfaces/charge-station';
import { AuthService } from '../../services/auth.service';
import { UserListItem } from '../../interfaces/userInterface';

export interface DialogData {
  status: any;
}

@Component({
  selector: 'app-charge-station-detail',
  templateUrl: './charge-station-detail.component.html',
  styleUrls: ['./charge-station-detail.component.css'],
})
export class ChargeStationDetailComponent implements OnInit {
  moniker!: string;
  station!: StationListItem;
  srcBase: string = 'assets/images/stations/';
  showAlert: boolean = false;
  status!: any;
  chargeConfirm:boolean = false;
  message!:string;
  useModel!:StationUseModel;
  actUser!:UserListItem;
  useResponse!:any;

  

  constructor(
    private service: ChargeStationService,
    private actRoute: ActivatedRoute,
    private authService: AuthService
    
  ) {}

  ngOnInit() {
    this.checkUser();
    this.moniker = this.actRoute.snapshot.params['moniker'];
    this.loadStation(this.moniker);
   
  }
  checkUser() {
  return this.authService.getActiveUser().subscribe((data:UserListItem) => {
    if(data){
      this.actUser = data;
    }
  });
  }

  loadStation(moniker: string) {
    return this.service
      .detailStation(moniker)
      .subscribe((data: StationListItem) => {
        if (data) {
          this.station = data;
          this.checkStationState(this.station.id);
        }
      });
  }

  imgSrc(moniker: string) {
    return this.srcBase + moniker + '.jpg';
  }

  checkStationState(id: string) {
  return this.service.stationState(id).subscribe((data: any) => {
      if (data) {
        this.status = data;
        this.showAlert = true;
      }
    });
  }

  chargeCar(){
    this.useModel = {
      stationId: this.station.id,
      userId: this.actUser.id,
      charge_time: this.timeGenerate()
    }

    return this.service.userChargeCar(this.useModel).subscribe((data:any) => {
        if(data){
           this.useResponse = data;
           this.message = this.useResponse.message
           this.chargeConfirm = true;
        }
    });
  }
 
  timeGenerate():number{
    const min = 1;
    const max = 500;
    const randomInRange: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomInRange;
  }


  resetState(){
    this.chargeConfirm = false;
    return this.service.changeStatusStation(this.station.id).subscribe((data:StationListItem) => {
      if(data){
        this.ngOnInit();
      }
    })
  }

  

 
}
