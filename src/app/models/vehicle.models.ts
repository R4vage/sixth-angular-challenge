export class Vehicle {

  constructor(
    public releaseYear: number,
    public brand: string,
    public model: string,
    public engine: string,
    public weight: string,
    public price: number,
    public logo: string,
    public imageURL: string,
    public engineDisplacement?:string,
    public compressionRatio?:number,
    public maximumTorque?:string,
    public fuelCompsumption?:string,
    public fuelTankCapacity?:string
  ) {
  }


}
