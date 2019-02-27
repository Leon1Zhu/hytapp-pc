import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-advantage-info',
  templateUrl: './house-advantage-info.component.html',
  styleUrls: ['./house-advantage-info.component.less']
})
export class HouseAdvantageInfoComponent implements OnInit {
  @Input() houseInfo: any;
  constructor() { }

  ngOnInit() {
  }

}
