import { HouseDetailModule } from './house-detail.module';

describe('HouseDetailModule', () => {
  let houseDetailModule: HouseDetailModule;

  beforeEach(() => {
    houseDetailModule = new HouseDetailModule();
  });

  it('should create an instance', () => {
    expect(houseDetailModule).toBeTruthy();
  });
});
