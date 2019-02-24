import { TestBed, inject } from '@angular/core/testing';

import { AboutServicePhoneService } from './about-service-phone.service';

describe('AboutServicePhoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutServicePhoneService]
    });
  });

  it('should be created', inject([AboutServicePhoneService], (service: AboutServicePhoneService) => {
    expect(service).toBeTruthy();
  }));
});
