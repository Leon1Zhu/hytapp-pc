import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
];

@NgModule({
  exports: [ RouterModule],
  imports: [ RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})
   ]
})
export class AppRoutingModule { }
