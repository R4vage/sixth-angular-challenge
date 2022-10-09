export interface Country {
    name: string,
    code: string
  }

export interface City {
    country: Country,
    geo_id: number,
    latitude: number,
    longitude: number,
    name: string,
    state_or_region: string
  }