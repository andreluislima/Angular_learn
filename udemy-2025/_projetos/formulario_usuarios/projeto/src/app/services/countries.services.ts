import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CountriesService{
    constructor(
        private readonly _htppClient:HttpClient
    ){}

    getCountries(){
        return this._htppClient.get<any>('https://countriesnow.space/api/v0.1/countries/positions').pipe(
            map((countriesResponse)=>{
                return countriesResponse.data;
            })
        );
    }
}