import { Component, OnInit } from '@angular/core';
import {AboutServicePhoneService} from '../about-service-phone.service';

@Component({
  selector: 'app-five-nav',
  templateUrl: './five-nav.component.html',
  styleUrls: ['./five-nav.component.less']
})
export class FiveNavComponent implements OnInit {
  phoneNumber: string;

  constructor(private aboutService: AboutServicePhoneService) { }

  ngOnInit() {
  }

  addSubPc() {
    this.aboutService.addSubPc(this.phoneNumber);
  }
}
