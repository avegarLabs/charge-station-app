import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../charge-station-detail/charge-station-detail.component';

@Component({
  selector: 'app-status-alert',
  templateUrl: './status-alert.component.html',
  styleUrls: ['./status-alert.component.css']
})
export class StatusAlertComponent implements OnInit {

  message:string = "";
  alertOk:boolean = false;
  alertFail:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<StatusAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.createMessage(this.data);
     
  }
  createMessage(status: any) {
    if(this.data.status.message === 'Available'){
       this.message = "The station is " + this.data.status.message;
       this.alertOk = true;
    }else{
      this.message = "The station is " + this.data.status.message;
      this.alertFail = true;
    }
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
