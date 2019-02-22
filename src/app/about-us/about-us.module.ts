import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutContentComponent } from './about-content/about-content.component';
import { FirstNavComponent } from './first-nav/first-nav.component';
import { SecondNavComponent } from './second-nav/second-nav.component';
import { SecondNavItemComponent } from './second-nav/second-nav-item/second-nav-item.component';
import { ThridNavComponent } from './thrid-nav/thrid-nav.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [AboutContentComponent, FirstNavComponent, SecondNavComponent, SecondNavItemComponent, ThridNavComponent]
})
export class AboutUsModule { }
