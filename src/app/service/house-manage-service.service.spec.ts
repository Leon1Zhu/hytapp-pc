import { TestBed, inject } from '@angular/core/testing';

import { HouseManageServiceService } from './house-manage-service.service';

describe('HouseManageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseManageServiceService]
    });
  });

  it('should be created', inject([HouseManageServiceService], (service: HouseManageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
