/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImageNameValidationService } from './image-name-validation.service';

describe('Service: ImageNameValidation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageNameValidationService]
    });
  });

  it('should ...', inject([ImageNameValidationService], (service: ImageNameValidationService) => {
    expect(service).toBeTruthy();
  }));
});
