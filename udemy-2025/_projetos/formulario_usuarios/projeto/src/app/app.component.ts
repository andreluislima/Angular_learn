import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.services';
import { StatesService } from './services/states.services';
import { CitiesService } from './services/cities.services';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
   constructor(
    private readonly _countriesService:CountriesService,
    private readonly _statesService:StatesService,
    private readonly _citiesService:CitiesService

   ){}
   

   ngOnInit(){
      this._countriesService.getCountries().subscribe((countriesResponse)=>{
        console.log('countriesResponse', countriesResponse)
       });

       this._statesService.getStates('Brazil').subscribe((statesResponse)=>{
           console.log('statesResponse', statesResponse)
       });

       this._citiesService.getCities('Brazil', 'Rio de Janeiro').subscribe((citiesResponse)=>{
        console.log('citiesResponse', citiesResponse)
       })
   }

   
}
