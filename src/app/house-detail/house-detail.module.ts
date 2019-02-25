import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDetailRoutingModule } from './house-detail-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { HousePageComponent } from './house-page/house-page.component';
import {FormsModule} from '@angular/forms';
import { HouseImgsComponent } from './house-imgs/house-imgs.component';
import { HouseRightInfoComponent } from './house-right-info/house-right-info.component';
import { HouseTitleComponent } from './house-title/house-title.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    HouseDetailRoutingModule
  ],
  declarations: [HousePageComponent, HouseImgsComponent, HouseRightInfoComponent, HouseTitleComponent]
})
export class HouseDetailModule { }
