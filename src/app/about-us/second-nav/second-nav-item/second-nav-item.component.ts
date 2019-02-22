import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-second-nav-item',
  templateUrl: './second-nav-item.component.html',
  styleUrls: ['./second-nav-item.component.less']
})
export class SecondNavItemComponent implements OnInit {
  @Input() imgObj;
  constructor() { }

  ngOnInit() {
  }

}
