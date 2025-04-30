import { IMainCountriesResponse } from "../main-countries-response.interface";
import { IState } from "./state.interface";
import { IStatesResponseData } from "./states-response-data.interface";

export interface IStatesResponse extends IMainCountriesResponse{
    data:IStatesResponseData;
}

