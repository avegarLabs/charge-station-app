import { Component, OnInit } from '@angular/core';
import { StationListItem } from '../../interfaces/charge-station';
import { ChargeStationService } from '../../services/charge-station.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private service: ChargeStationService,
    private actRoute: ActivatedRoute,
    
  ) {}

  ngOnInit() {
    this.moniker = this.actRoute.snapshot.params['moniker'];
    this.loadStation(this.moniker);
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
        console.log(data)
        this.status = data;
        this.showAlert = true;
      }
    });
  }

 
}
