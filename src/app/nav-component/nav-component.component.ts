import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.less']
})
export class NavComponentComponent implements OnInit {
   navList = [
    {
      name: '首页',
      link: 'about',
      isActive: true,
    },
    {
      name: '住宅',
      link: '',
      isActive: false,
    },
    {
      name: '商铺',
      link: '',
      isActive: false,
    },
    {
      name: '公寓',
      link: '',
      isActive: false,
    },
    {
      name: '写字楼',
      link: '',
      isActive: false,
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  goNav(navItem): void {
    this.navList.forEach((item) => {
      item.isActive = false;
    })
    navItem.isActive = true;
    if (navItem.link) {
      this.router.navigate([navItem.link]);
    }
  }

  ngOnInit() {
  }

}
