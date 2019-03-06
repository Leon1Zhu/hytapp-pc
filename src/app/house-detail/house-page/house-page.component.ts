import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HouseManageServiceService} from '../../service/house-manage-service.service';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AboutServiceService} from '../../service/about-service.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.less']
})
export class HousePageComponent implements OnInit {
  private houseId: string;
  isVisible = false;
  size = 'large';
  houseInfo: any = {};
  modelTitle: string;
  houseList: Array<any>;
  validateForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private houseManageService: HouseManageServiceService,
    private aboutService: AboutServiceService,
    private fb: FormBuilder,
    private notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.getRouterPar();
    this.getLikeHouse();
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      phone: [ null, [ Validators.required ] ],
    });
    this.validateForm = new FormGroup({
      'userName': new FormControl(null, {
        'validators': [Validators.required],
        updateOn: 'blur'
      }),
      'phone': new FormControl(null, {
        'validators': [ Validators.required, Validators.minLength(11), Validators.maxLength(11)],
        updateOn: 'blur'
      }),
    }); // <-- add custom validator at the FormGroup level
  }

  getLikeHouse() {
    this.houseManageService.getlikeHouse(0, 10).subscribe((response: any) => {
      this.houseList = response.content;
    });
  }

  getRouterPar() {
    this.route.params.subscribe((data) => {
      this.houseId = data.id;
      this.initHouseInfo();
    });
  }

  initHouseInfo() {
    this.houseManageService.getHouseById(this.houseId).subscribe((response: any) => {
      this.houseInfo = response;
    });
  }

  showModel(value: string) {
    this.modelTitle = value;
    this.isVisible = true;
  }

  // 模态框确定事件
  handleOk() {
    for(const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }

    if (this.validateForm.valid) {
      this.aboutService.addNewSub(this.phone.value, this.name.value, this.houseInfo.id, this.modelTitle).subscribe((response) => {
        this.notification.success('预约成功', '我们会在第一时间联系您');
        this.isVisible = false;
        this.validateForm.reset();
        return;
      });
    }
  }

  // 模态框取消事件
  handleCancel() {
    this.isVisible = false;
  }

  get name() { return this.validateForm.get('userName'); }

  get phone() { return this.validateForm.get('phone'); }
}
