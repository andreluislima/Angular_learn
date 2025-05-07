import { CitiesList } from "../../types/cites-list";
import { ICountriesResponse } from "../countries-response/countries-response.interface";
import { IMainCountriesResponse } from "../main-countries-response.interface";

export interface ICitiesResponse extends IMainCountriesResponse{
    // data:string[];
    data:CitiesList;
}