import { VehicleProviderService } from './vehicle-provider.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesComponent } from './vehicles.component';
import { SingleVehicleComponent } from './components/single-vehicle/single-vehicle.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

@NgModule({
  providers: [VehicleProviderService],
  declarations: [
    VehiclesComponent,
    SingleVehicleComponent,
    VehicleListComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [VehiclesComponent],
})
export class VehiclesModule {}
