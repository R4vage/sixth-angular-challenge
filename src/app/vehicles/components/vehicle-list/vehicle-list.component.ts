import { Vehicle } from './../../../models/vehicle.models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent {
  @Input() vehicleArray: Vehicle[] = []
  @Input() header: string = ""
  constructor() { }


}
