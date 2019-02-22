import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutContentComponent } from './about-content/about-content.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [AboutContentComponent]
})
export class AboutUsModule { }
