import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';



@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    VehiclesComponent
  ]
})
export class VehiclesModule { }
