import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-free-car',
  templateUrl: './free-car.component.html',
  styleUrls: ['./free-car.component.less']
})
export class FreeCarComponent implements OnInit {
  @Input() houseInfo: any;
  @Output() addSb = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  addSubPc() {
    this.addSb.emit('专车预约');
  }
}
