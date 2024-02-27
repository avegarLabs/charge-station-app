import { Component, OnInit } from '@angular/core';
import { StationListItem } from '../../interfaces/charge-station';
import { ChargeStationService } from '../../services/charge-station.service';


@Component({
  selector: 'app-grid-charge-station',
  templateUrl: './grid-charge-station.component.html',
  styleUrls: ['./grid-charge-station.component.css'],
})
export class GridChargeStationComponent implements OnInit {
  stationsList!: StationListItem[];
  

  constructor(
    private service: ChargeStationService,
   
    ) {}

  ngOnInit() {
    
    this.getAllStations()
  }

 

  getAllStations() {
    return this.service
      .getChargeStations()
      .subscribe((data: StationListItem[]) => {
        if (data) {
          console.log(data);
          this.stationsList = data;
        }
      });
  }
}
