import {Component, Input, OnInit} from '@angular/core';
import globalData from '../../util/global';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-swiper-item',
  templateUrl: './swiper-item.component.html',
  styleUrls: ['./swiper-item.component.less']
})
export class SwiperItemComponent implements OnInit {
  @Input() houseInfo: any;
  imgUrl: string = globalData.imgsUrl;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goDetail() {
    this.router.navigate(['houseDetail', this.houseInfo.id]);
    window.location.reload();
  }

}
