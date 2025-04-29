import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.services';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
   constructor(
    private readonly _countriesService:CountriesService
   ){}

   ngOnInit(){
      this._countriesService.getCountries().subscribe((countriesResponse)=>{
        console.log('countriesResponse', countriesResponse)
      })
   }
}
