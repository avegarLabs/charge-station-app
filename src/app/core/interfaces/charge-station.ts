export interface StationListItem {
  id: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  chargerType: string;
  numberOfChargingPoints: number;
  status: string;
  moniker:string;
}

export interface StationModel {
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  chargerType: string;
  numberOfChargingPoints: number;
  status: string;
}

export interface StationUseResponse{
    chargeStation:StationListItem;
    charge_time:number;
    date:string;
}


export interface StationUseModel{
    userId:string;
    stationId:string;
}


