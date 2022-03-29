import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesDataService {
  url="https://restcountries.com/v3.1"
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${this.url}/all`)
  }
  getCountryInfo(country: string) {
    return this.http.get(`${this.url}/name/${country}`)
  }
  getRegionCountries(region: string) {
    return this.http.get(`${this.url}/region/${region}`)
  }
  getCounriesByAlpha(country:string){
    return this.http.get(`${this.url}/alpha/${country}`)
  }
}
