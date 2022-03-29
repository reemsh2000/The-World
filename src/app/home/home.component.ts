import { Component, OnInit } from '@angular/core'
import { CountriesDataService } from '../countries-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countries: any
  loading = true
  selectedRegion: any
  regions = [
    { name: 'Europe' },
    { name: 'Americas' },
    { name: 'Oceania' },
    { name: 'Africa' },
    { name: 'Asia' },
  ]

  constructor(private countryService: CountriesDataService) {}
  ngOnInit() {
    this.getCountriesInfo()
    console.log(this.selectedRegion)
  }
  getCountriesInfo() {
    this.countryService.getAllCountries().subscribe((data) => {
      this.countries = data
      this.loading = false
    })
  }

  filterByRegion(region: string) {
    this.countryService.getRegionCountries(region).subscribe((data) => {
      this.countries = data
      this.loading = false
    })
  }
  searchAboutCountry(country: string) {
    this.countryService.getCountryInfo(country).subscribe((data) => {
      this.countries = data
      this.loading = false
    })

  }
 
}
