/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridChargeStationComponent } from './grid-charge-station.component';

describe('GridChargeStationComponent', () => {
  let component: GridChargeStationComponent;
  let fixture: ComponentFixture<GridChargeStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridChargeStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridChargeStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
