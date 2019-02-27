import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-foot-com',
  templateUrl: './foot-com.component.html',
  styleUrls: ['./foot-com.component.less']
})
export class FootComComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goAboutUs() {
    this.router.navigate(['about']);
  }

}
