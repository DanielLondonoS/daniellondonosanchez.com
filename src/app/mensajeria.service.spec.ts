import { TestBed, inject } from '@angular/core/testing';

import { MensajeriaService } from './mensajeria.service';

describe('MensajeriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensajeriaService]
    });
  });

  it('should be created', inject([MensajeriaService], (service: MensajeriaService) => {
    expect(service).toBeTruthy();
  }));
});
