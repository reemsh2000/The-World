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
  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let countryName:any=params.get('country')
      this.countriesService.getCountryInfo(countryName).subscribe((data)=>{
        console.log(data)
      }

      )
    });
  }

}
