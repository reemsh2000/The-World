import { Component, OnInit,Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  inDarkMode = false;

  countryName: any;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit(): void {}

  setDarkMode(checked:boolean) {
    this.document.body.classList.toggle('dark');
  }
}
