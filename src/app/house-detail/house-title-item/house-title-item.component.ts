import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-house-title-item',
  templateUrl: './house-title-item.component.html',
  styleUrls: ['./house-title-item.component.less']
})
export class HouseTitleItemComponent implements OnInit {
  @Input() titleName: string;
  @Input() titleId: string;
  constructor() { }

  ngOnInit() {
  }

}
