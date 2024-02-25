/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChargeStationService } from './charge-station.service';

describe('Service: ChargeStation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChargeStationService]
    });
  });

  it('should ...', inject([ChargeStationService], (service: ChargeStationService) => {
    expect(service).toBeTruthy();
  }));
});
