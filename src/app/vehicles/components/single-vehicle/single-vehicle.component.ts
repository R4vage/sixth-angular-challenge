import { Vehicle } from './../../../models/vehicle.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-vehicle',
  templateUrl: './single-vehicle.component.html',
  styleUrls: ['./single-vehicle.component.scss']
})
export class SingleVehicleComponent {
  @Input() vehicle: Vehicle = {
    brand: "",
    releaseYear: 0,
    model: "",
    engine: "",
    weight: "",
    price: 0,
    logo: "",
    imageURL: "",
    engineDisplacement : '',
    compressionRatio : 0,
    maximumTorque: '',
    fuelCompsumption: '',
    fuelTankCapacity: ''
  }

  constructor() { }


}
