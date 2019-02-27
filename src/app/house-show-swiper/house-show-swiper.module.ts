import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContentComponent } from './swiper-content/swiper-content.component';
import { SwiperItemComponent } from './swiper-item/swiper-item.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SwiperContentComponent
  ],
  declarations: [SwiperContentComponent, SwiperItemComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HouseShowSwiperModule { }
