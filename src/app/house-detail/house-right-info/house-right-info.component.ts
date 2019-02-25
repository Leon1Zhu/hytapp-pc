import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-house-right-info',
  templateUrl: './house-right-info.component.html',
  styleUrls: ['./house-right-info.component.less']
})
export class HouseRightInfoComponent implements OnInit {

  @Input() houseInfo: any;
  @Output() addSb = new EventEmitter<void>();
  moment = moment;
  constructor() { }

  ngOnInit() {
  }

  addSubPc () {
    this.addSb.emit();
  }

}
