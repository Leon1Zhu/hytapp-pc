import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-redpackage-tag',
  templateUrl: './redpackage-tag.component.html',
  styleUrls: ['./redpackage-tag.component.less']
})
export class RedpackageTagComponent implements OnInit {
  @Input() houseInfo: any;
  @Output() addSb = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  addSubPc() {
    this.addSb.emit();
  }
}


