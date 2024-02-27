import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChargeStationService } from 'src/app/core/services/charge-station.service';
import {
  StationListItem,
  StationModel,
} from 'src/app/core/interfaces/charge-station';

@Component({
  selector: 'app-charge-station-form',
  templateUrl: './charge-station-form.component.html',
  styleUrls: ['./charge-station-form.component.css'],
})
export class ChargeStationFormComponent implements OnInit {
  @Input() stationsItems: StationListItem[] = [];
  @Output() updateStationsList = new EventEmitter<StationListItem[]>();
  flag!: string;
  stationForm!: FormGroup;
  stationModel!: StationModel;
  buttonTitle!: string;
 
  constructor(
    private formBuilder: FormBuilder,
    private service: ChargeStationService
  ) {}

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges(){
    console.log(this.stationsItems)
    this.flag = this.stationsItems.length === 0 ? 'insert' : 'update';
    this.stationForm =
      this.flag === 'insert' ? this.initForm() : this.pupulateForm();
    this.buttonTitle = this.flag === 'insert' ? 'Save' : 'Update';
    
  }

  initForm(): FormGroup<any> {
    return this.formBuilder.group({
      description: ['', [Validators.required]],
      address: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      chargerType: ['', [Validators.required]],
      numberOfChargingPoints: ['', [Validators.required]],
      status: ['AVAILABLE'],
    });
  }

  pupulateForm(): FormGroup<any> {
    return this.formBuilder.group({
      description: [this.stationsItems[0].description, [Validators.required]],
      address: [this.stationsItems[0].address, [Validators.required]],
      latitude: [this.stationsItems[0].latitude, [Validators.required]],
      longitude: [this.stationsItems[0].longitude, [Validators.required]],
      chargerType: [this.stationsItems[0].chargerType, [Validators.required]],
      numberOfChargingPoints: [
        this.stationsItems[0].numberOfChargingPoints,
        [Validators.required],
      ],
      status: [
        this.stationsItems[0].status,
        [Validators.required],
      ]
    });
  }

  formAction() {
    if (this.flag === 'insert') {
      this.stationModel = this.buildStationModel();
      this.save(this.stationModel);
    } else {
      this.stationModel = this.buildStationModel();
      this.stationModel.status = this.mapStateDisplayToEnum(this.stationModel.status);
      this.update(this.stationsItems[0].id, this.stationModel);
    }
  }
  mapStateDisplayToEnum(status: string): string {
    return status === "Available" ? "AVAILABLE" : "IN_USE";
    
  }

  buildStationModel() {
    return {
      description: this.stationForm.value.description,
      address: this.stationForm.value.address,
      latitude: this.stationForm.value.latitude,
      longitude: this.stationForm.value.longitude,
      chargerType: this.stationForm.value.chargerType,
      numberOfChargingPoints: this.stationForm.value.numberOfChargingPoints,
      status: this.stationForm.value.status,
    };
  }



  save(model: StationModel){
   return this.service.persistStations(model).subscribe((data:StationListItem) => {
      if(data){
        this.reloadData();
        this.stationForm = this.initForm();
      }
    });

  }

  update(stationId: string, model:StationModel){
   return this.service.editStation(stationId, model).subscribe((data:StationListItem) => {
    if(data){
      this.reloadData();
      this.stationForm = this.initForm();
    }
   });
  }

  reloadData(){
    return this.service.getChargeStations().subscribe((data: StationListItem[]) => {
      if (data) {
        this.stationsItems = data;
        this.updateStationsList.emit(this.stationsItems);
        this.stationsItems = [];
        this.ngOnChanges();
      }
    });

  }

  
}
