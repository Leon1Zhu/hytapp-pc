import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-title',
  templateUrl: './house-title.component.html',
  styleUrls: ['./house-title.component.less']
})
export class HouseTitleComponent implements OnInit {

  @Input() houseInfo: any;
  constructor() { }

  ngOnInit() {
  }

}
