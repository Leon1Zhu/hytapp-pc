import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input,
  OnInit
} from '@angular/core';
import globalData from '../../util/global';

@Component({
  selector: 'app-house-imgs',
  templateUrl: './house-imgs.component.html',
  styleUrls: ['./house-imgs.component.less']
})
export class HouseImgsComponent implements OnInit, AfterViewInit, AfterViewInit, AfterViewChecked {

  @Input() houseInfo: any;
  galleryThumbs: any;
  imgUrl: string = globalData.imgsUrl;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }


  ngAfterViewChecked(): void {
    if (Object.keys(this.houseInfo).length > 0 && !this.galleryThumbs) {
      this.galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      const galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: this.galleryThumbs
        }
      });
    }
  }

}
