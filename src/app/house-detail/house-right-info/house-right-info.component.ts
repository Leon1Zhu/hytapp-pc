import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-right-info',
  templateUrl: './house-right-info.component.html',
  styleUrls: ['./house-right-info.component.less']
})
export class HouseRightInfoComponent implements OnInit {

  @Input() houseInfo: any;
  constructor() { }

  ngOnInit() {
  }

}
