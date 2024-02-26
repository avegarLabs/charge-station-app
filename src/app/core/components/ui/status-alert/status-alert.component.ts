import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-alert',
  templateUrl: './status-alert.component.html',
  styleUrls: ['./status-alert.component.css']
})
export class StatusAlertComponent implements OnInit {

  @Input() status: any;
  message:string = "";
  alertOk:boolean = false;
  alertFail:boolean = false;

  constructor(
   ) { }

  ngOnInit() {
    this.createMessage();
     
  }
  createMessage() {
    if(this.status.message === 'Available'){
       this.message = "The station is " + this.status.message;
       this.alertOk = true;
    }else{
      this.message = "The station is " + this.status.message;
      this.alertFail = true;
    }
    
  }
 }
