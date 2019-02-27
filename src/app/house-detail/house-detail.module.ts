import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDetailRoutingModule } from './house-detail-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { HousePageComponent } from './house-page/house-page.component';
import {FormsModule} from '@angular/forms';
import { HouseImgsComponent } from './house-imgs/house-imgs.component';
import { HouseRightInfoComponent } from './house-right-info/house-right-info.component';
import { HouseTitleComponent } from './house-title/house-title.component';
import { RedpackageTagComponent } from './house-right-info/redpackage-tag/redpackage-tag.component';
import { FreeCarComponent } from './house-right-info/free-car/free-car.component';
import { HouseDetailNavComponent } from './house-detail-nav/house-detail-nav.component';
import { HouseTitleItemComponent } from './house-title-item/house-title-item.component';
import { HouseTypeComComponent } from './house-type-com/house-type-com.component';
import { HouseBaseInfoComponent } from './house-base-info/house-base-info.component';
import { HouseAdvantageInfoComponent } from './house-advantage-info/house-advantage-info.component';
import { HousOtherAreaComponent } from './hous-other-area/hous-other-area.component';
import {HouseShowSwiperModule} from '../house-show-swiper/house-show-swiper.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    HouseShowSwiperModule,
    HouseDetailRoutingModule
  ],
  declarations: [
    HousePageComponent,
    HouseImgsComponent,
    HouseRightInfoComponent,
    HouseTitleComponent,
    RedpackageTagComponent,
    FreeCarComponent,
    HouseDetailNavComponent,
    HouseTitleItemComponent,
    HouseTypeComComponent,
    HouseBaseInfoComponent,
    HouseAdvantageInfoComponent,
    HousOtherAreaComponent,
  ]
})
export class HouseDetailModule { }
