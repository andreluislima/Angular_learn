import { StatesList } from "../../types/states-list";
import { IState } from "./state.interface";

export interface IStatesResponseData{
    name:string,
    iso3:string,
    states:StatesList
}