import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StationListItem } from 'src/app/core/interfaces/charge-station';

@Component({
  selector: 'app-station-card',
  templateUrl: './station-card.component.html',
  styleUrls: ['./station-card.component.css']
})
export class StationCardComponent implements OnInit {
  @Input() station:any;
  srcBase:string = "assets/images/stations/";
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  imgSrc(moniker:string){
    return this.srcBase+moniker+".jpg"
  }

  goToDetail(moniker:string){
     this.router.navigate(['detail', moniker])
  }

}
