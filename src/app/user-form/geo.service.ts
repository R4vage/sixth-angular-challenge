import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import countries from '../data/countries.json'

interface Options {
  headers?: [HttpHeaders]; 
  context?: [HttpContext]; 
  observe?: "body"; 
  params?:  [HttpParams]; 
  reportProgress?: boolean; 
  responseType?:  "json"; 
  withCredentials?: boolean; 
}


@Injectable({
  providedIn: 'root',
})
export class GeoService {

/*   options?: { 
    headers?: [HttpHeaders]; 
    context?: [HttpContext]; 
    observe?: "body"; 
    params?:  [HttpParams]; 
    reportProgress?: boolean; 
    responseType?:  "json"; 
    withCredentials?: boolean; 
    } */


  countries = countries
  constructor(private http: HttpClient) {}

  private get(url: string, options?:{headers:HttpHeaders}) {
    return this.http.get(url, options);
  }



  public getCities(cityCode:string){
    let headers = new HttpHeaders().append("apikey", "CM8c4l1kEWA9TlvhLQs5qCkMtTYBj7BW") 
    let requestOptions = {
      headers: headers
    };
    /* return this.get(`https://json.theeasyapi.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2OTY4NzgxMTQsImF1ZCI6MTI1OH0.IIuAZGJEk7Bmm_QU0Nk7sJq7PGClDtd68N4ikor7K8A/?service=countries&method=getregions&country=${cityCode}`) */
    return this.get(`https://api.apilayer.com/geo/country/cities/${cityCode}`, requestOptions)/*  If above fails, this one can be used as an alternative */

  }

  public getCountries() {
    return this.countries
  }


}
