import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-base-info',
  templateUrl: './house-base-info.component.html',
  styleUrls: ['./house-base-info.component.less']
})
export class HouseBaseInfoComponent implements OnInit {
  @Input() houseInfo: any;
  constructor() { }

  ngOnInit() {
  }

}
