import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDetailRoutingModule } from './house-detail-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { HousePageComponent } from './house-page/house-page.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HouseDetailRoutingModule
  ],
  declarations: [HousePageComponent]
})
export class HouseDetailModule { }
