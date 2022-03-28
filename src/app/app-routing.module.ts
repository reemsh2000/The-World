import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path :"",component:HomeComponent },
  {path :"country/:country",component:CountryPageComponent },
  {path :"**",component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
