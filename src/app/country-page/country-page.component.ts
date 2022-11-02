import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesDataService } from '../countries-data.service';
@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  country: any;
  borderCountries: any;
  loading = true;
  diplaySlider = false;
  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesDataService
  ) {}

  ngOnInit(): void {
    this.diplaySlider = false;
    this.route.paramMap.subscribe((params) => {
      let countryName: any = params.get('country');
      this.countriesService
        .getCountryInfo(countryName)
        .subscribe((data: any) => {
          this.country = data[0];
          this.loading = false;
          this.borderCountries = this.country.borders;
          this.diplaySlider = true;
        });
    });
  }
}
