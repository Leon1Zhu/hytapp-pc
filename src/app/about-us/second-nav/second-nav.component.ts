import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-nav',
  templateUrl: './second-nav.component.html',
  styleUrls: ['./second-nav.component.less']
})
export class SecondNavComponent implements OnInit {
  itemList = [
    {
      imgSrc: '/assets/user.svg',
      title: '120万',
      content: '帮助1297685位客户解决了安家置业的难题'
    },
    {
      imgSrc: '/assets/tj.svg',
      title: '95%',
      content: '95%的客户向朋友推荐云锋房产'
    },
    {
      imgSrc: '/assets/like.png',
      title: '90万',
      content: '收到4908位客户累计90万字的长篇好评'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
