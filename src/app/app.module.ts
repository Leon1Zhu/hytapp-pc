import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { AboutUsModule } from './about-us/about-us.module';
import { FootComComponent } from './foot-com/foot-com.component';
import {httpInterceptorProviders} from './http-interceptors';
import {HouseDetailModule} from './house-detail/house-detail.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    FootComComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AboutUsModule,
    NgZorroAntdModule,
    HouseDetailModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders],
})
export class AppModule { }
