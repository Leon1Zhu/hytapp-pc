import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HousePageComponent} from './house-page/house-page.component';

const routes: Routes = [
  { path: 'houseDetail/:id',  component: HousePageComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseDetailRoutingModule { }
