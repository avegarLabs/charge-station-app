import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageNameValidationService {

  fileImageNames!:string[];

constructor() { 
   this.fileImageNames = ["wallbox-america-station", "electrify-america-station", "abb-station", "tesla-station", "evgo-station", "chargepoint-station", "blink-station", "blink-station"];
}

getFileNames():string[]{
  return this.fileImageNames;
}

}
