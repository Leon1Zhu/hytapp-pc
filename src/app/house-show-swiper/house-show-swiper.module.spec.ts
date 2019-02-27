import { HouseShowSwiperModule } from './house-show-swiper.module';

describe('HouseShowSwiperModule', () => {
  let houseShowSwiperModule: HouseShowSwiperModule;

  beforeEach(() => {
    houseShowSwiperModule = new HouseShowSwiperModule();
  });

  it('should create an instance', () => {
    expect(houseShowSwiperModule).toBeTruthy();
  });
});
