import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseManageServiceService} from '../../service/house-manage-service.service';

@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.less']
})
export class HousePageComponent implements OnInit {
  private houseId: string;
  isVisible = false;
  size = 'large';
  houseInfo: object = {};

  constructor(
    private route: ActivatedRoute,
    private houseManageService: HouseManageServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.houseId = data.id;
      this.initHouseInfo();
    });
  }

  initHouseInfo() {
    this.houseManageService.getHouseById(this.houseId).subscribe((response) => {
      this.houseInfo = response;
    });
  }

  showModel() {
    this.isVisible = true;
  }

  // 模态框确定事件
  handleOk() {

  }

  // 模态框取消事件
  handleCancel() {
    this.isVisible = false;
  }

}
