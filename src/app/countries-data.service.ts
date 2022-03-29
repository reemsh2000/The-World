import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesDataService {
  url="https://restcountries.com"
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${this.url}/v3.1/all`)
  }
  getCountryInfo(country: string) {
    return this.http.get(`${this.url}/v3.1/name/${country}`)
  }
  getRegionCountries(region: string) {
    return this.http.get(`${this.url}/v3.1/region/${region}`)
  }
}
