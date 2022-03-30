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
  responsiveOptions

  constructor(private countriesService: CountriesDataService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ]
  }

  ngOnInit(): void {
    this.borderCountries.map((country: any) => {
      this.countriesService
        .getCounriesByAlpha(country)
        .subscribe((data: any) => {
          this.borderCountriesInfo.push(data[0])
        })
    })
  }
}
