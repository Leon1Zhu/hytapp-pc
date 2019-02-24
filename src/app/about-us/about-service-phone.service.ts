import { Injectable } from '@angular/core';
import {AboutServiceService} from '../service/about-service.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class AboutServicePhoneService {
  private phoneReg: any = /^[0-9]*$/;
  private addSuccessMsg: String = '预约成功，我们将会在第一时间联系您';
  constructor(private aboutService: AboutServiceService, private notification: NzNotificationService) { }
  addSubPc(phone) {
    if (!this.phoneReg.test(phone) || phone.length !== 11) {
      this.notification.error('手机号码错误', '手机号应为11位数字');
      return;
    }
    this.aboutService.addNewSubPc(phone, '帮我找房').subscribe((data) => {
      this.notification.success(null, this.addSuccessMsg.toString());
    });
  }
}
