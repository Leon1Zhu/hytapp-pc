import { Component, OnInit } from '@angular/core';
import {NzNotificationComponent, NzNotificationService} from 'ng-zorro-antd';
import {AboutServiceService} from '../../service/about-service.service';
import {AboutServicePhoneService} from '../about-service-phone.service';

@Component({
  selector: 'app-four-nav',
  templateUrl: './four-nav.component.html',
  styleUrls: ['./four-nav.component.less']
})
export class FourNavComponent implements OnInit {

  phoneNumber: string;

  constructor(private aboutService: AboutServicePhoneService) { }

  ngOnInit() {
  }

  addSubPc() {
    this.aboutService.addSubPc(this.phoneNumber);
  }

}
