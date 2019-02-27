import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-swiper-content',
  templateUrl: './swiper-content.component.html',
  styleUrls: ['./swiper-content.component.less']
})
export class SwiperContentComponent implements OnInit {
  @Input() houseList: any;

  constructor() { }

  ngOnInit() {
  }

}
