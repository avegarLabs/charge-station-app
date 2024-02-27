import { Component, OnInit } from '@angular/core';
import { ChargeStationService } from 'src/app/core/services/charge-station.service';
import { StationListItem } from 'src/app/core/interfaces/charge-station';

@Component({
  selector: 'app-admin-charge-station',
  templateUrl: './admin-charge-station.component.html',
  styleUrls: ['./admin-charge-station.component.css'],
})
export class AdminChargeStationComponent implements OnInit {
  stationsList!: StationListItem[];
  itemsStations: StationListItem[] = [];
  acStation!: number;
  dcStation!: number;
  freeAC!: number;
  useAC!: number;
  freeDC!: number;
  useDC!: number;
  constructor(private service: ChargeStationService) {}

  ngOnInit() {
    this.loadStations();
  }
  loadStations() {
    return this.service
      .getStationsList()
      .subscribe((data: StationListItem[]) => {
        if (data) {
          this.stationsList = data;
          this.generateStatics(this.stationsList);
        }
      });
  }

  generateStatics(stationsList: StationListItem[]) {
      this.acStation,
      this.dcStation,
      this.freeAC,
      this.useAC,
      this.freeDC,
      this.useDC = 0;
    this.dcStation = stationsList.filter(
      (item: StationListItem) => item.chargerType === 'DC'
    ).length;
    this.freeDC = stationsList.filter(
      (item: StationListItem) =>
        item.chargerType === 'DC' && item.status.includes('Available')
    ).length;
    this.useDC = stationsList.filter(
      (item: StationListItem) =>
        item.chargerType === 'DC' && item.status.includes('In Use')
    ).length;
    this.acStation = stationsList.filter(
      (item: StationListItem) => item.chargerType === 'AC'
    ).length;
    this.freeAC = stationsList.filter(
      (item: StationListItem) =>
        item.chargerType === 'AC' && item.status.includes('Available')
    ).length;
    this.useAC = stationsList.filter(
      (item: StationListItem) =>
        item.chargerType === 'AC' && item.status.includes('In Use')
    ).length;
    
  }

  removeStation(stationId: string) {
    return this.service.removeStation(stationId).subscribe((data) => {
      if (data) {
        this.loadStations();
      }
    });
  }

  editStations(item: StationListItem) {
    this.itemsStations = [];
    this.itemsStations.push(item);
  }
}
