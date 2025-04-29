import { IMainCountriesResponse } from "../main-countries-response.interface";
import { ICountry } from "./country.interface";

export interface ICountriesResponse extends IMainCountriesResponse{
    data:ICountry[];
}

 