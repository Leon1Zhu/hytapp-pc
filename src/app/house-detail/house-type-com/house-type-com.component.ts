import {Component, Input, OnInit} from '@angular/core';
import global from '../../util/global';
@Component({
  selector: 'app-house-type-com',
  templateUrl: './house-type-com.component.html',
  styleUrls: ['./house-type-com.component.less']
})
export class HouseTypeComComponent implements OnInit {
  @Input() typeInfo: any;
  globalInfo = global;
  constructor() { }

  ngOnInit() {
  }

}
