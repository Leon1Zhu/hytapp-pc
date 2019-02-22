import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.less']
})
export class NavComponentComponent implements OnInit {
   navList = [
    {
      name: '首页',
      link: '/',
      isActive: true,
    },
    {
      name: '住宅',
      link: '/',
      isActive: false,
    },
    {
      name: '商铺',
      link: '/',
      isActive: false,
    },
    {
      name: '公寓',
      link: '/',
      isActive: false,
    },
    {
      name: '写字楼',
      link: '/',
      isActive: false,
    },
  ];
  constructor() { }

  goNav(navItem): void {
    this.navList.forEach((item) => {
      item.isActive = false;
    })
    navItem.isActive = true;
  }

  ngOnInit() {
  }

}
