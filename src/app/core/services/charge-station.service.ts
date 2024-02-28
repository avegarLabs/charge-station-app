import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  StationListItem,
  StationModel,
  StationUseModel,
  StationUseResponse,
} from '../interfaces/charge-station';
import { Observable } from 'rxjs';
import { station_rote, station_public_route } from '../util/api-routes';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ChargeStationService {
  constructor(private http: HttpClient) {}

  getChargeStations(): Observable<StationListItem[]> {
    console.log(station_public_route);
    return this.http.get<StationListItem[]>(station_public_route);
  }

  getStationsList(): Observable<StationListItem[]> {
    return this.http.get<StationListItem[]>(station_rote);
  }

  persistStations(model: StationModel): Observable<StationListItem> {
    return this.http.post<StationListItem>(station_rote, model);
  }

  editStation(
    stationId: string,
    model: StationModel
  ): Observable<StationListItem> {
    return this.http.put<StationListItem>(
      `${station_rote}/${stationId}`,
      model
    );
  }

  removeStation(stationId: string): Observable<string> {
    return this.http.delete<string>(`${station_rote}/${stationId}`);
  }

  detailStation(moniker: string): Observable<StationListItem> {
    return this.http.get<StationListItem>(`${station_rote}/details/${moniker}`);
  }


  changeStatusStation(id: string): Observable<StationListItem> {
    return this.http.get<StationListItem>(`${station_rote}/modify/${id}`);
  }


  userChargeCar(model: StationUseModel): Observable<any> {
    return this.http.post<any>(`${station_rote}/use`, model);
  }

  stationState(id: string) {
    return this.http.get(`${station_rote}/status`, 
      {
        params: {
          id: id
      }
    });
  }

  

}
