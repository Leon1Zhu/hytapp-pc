import {AfterViewChecked, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-swiper-content',
  templateUrl: './swiper-content.component.html',
  styleUrls: ['./swiper-content.component.less']
})
export class SwiperContentComponent implements OnInit, AfterViewChecked {
  @Input() houseList: any;
  @Input() swiperClass: any;
  swiperContainer: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    if ( this.houseList && this.houseList.length > 0 && !this.swiperContainer) {
      this.swiperContainer = new Swiper(`.${this.swiperClass}`, {
        slidesPerView: 4,
        spaceBetween: 30,
      });
    }
  }

}
