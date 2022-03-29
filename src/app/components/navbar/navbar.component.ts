import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  checked = false;

  countryName: any;
  constructor() {}
  ngOnInit(): void {}

  setDarkMode(e: any) {
    console.log(e);
  }
}
