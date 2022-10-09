import { Vehicle } from './../models/vehicle.models';
import { VehicleProviderService } from './vehicle-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  japaneseCars: Vehicle[]
  germanCars: Vehicle[]
  americanCars: Vehicle[]

  constructor(vehicleProvider: VehicleProviderService) {
    this.japaneseCars= vehicleProvider.getJapaneseCars()
    this.germanCars= vehicleProvider.getGermanCars()
    this.americanCars= vehicleProvider.getAmericanCars()
  }
}
