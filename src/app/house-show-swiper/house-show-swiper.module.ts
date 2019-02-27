import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperContentComponent } from './swiper-content/swiper-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SwiperContentComponent
  ],
  declarations: [SwiperContentComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HouseShowSwiperModule { }
