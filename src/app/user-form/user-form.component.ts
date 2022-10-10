import { City } from './../models/geo.models';
import { GeoService } from './geo.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';
import { Country } from '../models/geo.models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  modalOpened = false;
  countries: Country[];
  cities: City[] = [];
  constructor(private geoService: GeoService) {
    this.countries = geoService.getCountries();
  }

  ngOnInit(): void {
    this.geoService.getCountries();
  }

  setCities(cityCode: string) {
    console.log(cityCode);
    this.cities = [];
    this.geoService.getCities(cityCode).subscribe((response: any) => {
      this.cities = response;
    });
  }

  onSubmit(variable: NgModel) {
    console.log(variable);
    this.modalOpened = true;
  }

  validateEqual(c: FormControl, b: FormControl) {
    if (c.value !== b.value) {
      return { notEqual: true };
    }
    return null;
  }

  getToday() {
    return new Date().toISOString().split('T')[0];
  }

  closeModal(){
    this.modalOpened = false
  }
}
