import { Component, OnInit } from '@angular/core';
import { CountriesDataService } from '../countries-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countries: any=[];
  loading = true;
  selectedRegion: any;
  regions = [
    { name: 'Asia' },
    { name: 'Africa' },
    { name: 'Americas' },
    { name: 'Europe' },
    { name: 'Oceania' },
  ];

  constructor(private countryService: CountriesDataService) {}
  ngOnInit() {
   this.getCountriesInfo();
  }
  getCountriesInfo() {
    this.countryService.getAllCountries().subscribe((data: any) => {
      this.countries = data.filter((country: any) => {
        return country.name.common !== 'Israel';
      });
      this.loading = false;
    });
  }

  filterByRegion(region: string) {
    this.countryService.getRegionCountries(region).subscribe((data: any) => {
      this.countries = data.filter((country: any) => {
        return country.name.common !== 'Israel';
      });
      this.loading = false;
    });
  }
  searchAboutCountry(country: string) {
    this.countryService.getCountryInfo(country).subscribe((data: any) => {
      this.countries = data.filter((country: any) => {
        return country.name.common !== 'Israel';
      });
      this.loading = false;
    });
  }
}
