import { Vehicle } from './../../../models/vehicle.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {
  @Input() vehicleArray: Vehicle[] = []
  @Input() header: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
