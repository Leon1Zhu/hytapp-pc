import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import {AboutUsModule} from './about-us/about-us.module';
import { FootComComponent } from './foot-com/foot-com.component';
import {httpInterceptorProviders} from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    FootComComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AboutUsModule,
    NgZorroAntdModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders],
})
export class AppModule { }
