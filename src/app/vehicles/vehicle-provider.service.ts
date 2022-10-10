import { Vehicle } from '../models/vehicle.models';
import { Injectable } from '@angular/core';

@Injectable()
export class VehicleProviderService {
  constructor() {}

  public getJapaneseCars(): Vehicle[] {
    let carArray: Vehicle[] = [];
    let carOne = new Vehicle(
      2015,
      'Toyota',
      'Prado',
      '2.4 24v',
      '2125kg',
      45000,
      'toyota.png',
      'toyota-prado.jpg',
      '1992 cm3',
      8.4,
      '350Nm',
      '33 L',
      '75 L'
    );
    let carTwo = new Vehicle(
      2019,
      'Mitsubishi',
      'Mirage',
      '1.8 16v',
      '1630kg',
      17000,
      'mitsubishi.png',
      'mitsubishi-mirage.jpg',
      '1985 cm3',
      9.5,
      '300Nm',
      '35 L',
      '55 L'
    );
    carArray.push(carOne, carTwo);
    return carArray;
  }

  public getAmericanCars(): Vehicle[] {
    let carArray: Vehicle[] = [];
    let carOne = new Vehicle(
      1967,
      'Ford',
      'Mustang Shelby GT-500',
      '5.4 32v',
      '2125kg',
      125000,
      'ford.png',
      'ford-mustang.jpg',
      '1992 cm3',
      10.2,
      '500Nm',
      '30 L',
      '62 L'
    );

    carArray.push(carOne);
    return carArray;
  }

  public getGermanCars(): Vehicle[] {
    let carArray: Vehicle[] = [];
    let carOne = new Vehicle(
      2016,
      'Volkswagen',
      'Constellation',
      '6.9 24v',
      '4500kg',
      75000,
      'volkswagen.png',
      'volkswagen-constellation.jpg',
      '1998 cm3',
      9.2,
      '450Nm',
      '42 L',
      '120 L'
    );
    let carTwo = new Vehicle(
      1948,
      'Daimler',
      'Super Eight',
      '3.9 24v',
      '1980kg',
      85000,
      'daimler.png',
      'daimler-supereight.jpg',
      '1760 cm3',
      6.7,
      '240Nm',
      '27 L',
      '45 L'
    );
    let carThree = new Vehicle(
      2022,
      'BMW',
      'M240i',
      '3.0 24v',
      '1980kg',
      48550,
      'bmw.png',
      'bmw-m240i.jpg',
      '1996 cm3',
      9.8,
      '380Nm',
      '24 L',
      '60 L'
    );
    carArray.push(carOne, carTwo, carThree);
    return carArray
  }
}
