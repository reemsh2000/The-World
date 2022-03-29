import { Component } from '@angular/core';
import { CountriesDataService } from './countries-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countries';
  countryName: any
  constructor(private countryService:CountriesDataService) { }

  searchAboutCountry(country:any){
    

  }
}
