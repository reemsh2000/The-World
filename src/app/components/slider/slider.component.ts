import { Component, Input, OnInit } from '@angular/core'
import { CountriesDataService } from 'src/app/countries-data.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input() borderCountries: any = []
  borderCountriesInfo: any = []
  constructor(private countriesService: CountriesDataService) {}

  ngOnInit(): void {
    console.log(this.borderCountries)
    this.borderCountries.map((country: any) => {
      this.countriesService
        .getCounriesByAlpha(country)
        .subscribe((data: any) => {
          console.log(data[0])
          this.borderCountriesInfo.push(data[0])
        })
    })
  }
}
