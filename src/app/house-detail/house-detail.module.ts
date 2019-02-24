import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDetailRoutingModule } from './house-detail-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { HousePageComponent } from './house-page/house-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    HouseDetailRoutingModule
  ],
  declarations: [HousePageComponent]
})
export class HouseDetailModule { }
