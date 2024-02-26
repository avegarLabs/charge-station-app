import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChargeStationService } from 'src/app/core/services/charge-station.service';
import {
  StationListItem,
  StationUseModel,
} from 'src/app/core/interfaces/charge-station';

@Component({
  selector: 'app-charge-station-form',
  templateUrl: './charge-station-form.component.html',
  styleUrls: ['./charge-station-form.component.css'],
})
export class ChargeStationFormComponent implements OnInit {
  stationForm!: FormGroup;
  stationModel!: StationUseModel;

  constructor(
    private formBuilder: FormBuilder,
    private service: ChargeStationService
  ) {}

  ngOnInit() {
    this.stationForm = this.initForm();
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
}
