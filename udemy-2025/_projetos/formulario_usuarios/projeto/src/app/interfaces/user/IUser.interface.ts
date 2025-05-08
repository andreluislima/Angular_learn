import { IAdress } from "./address/IAdress.interface";
import { IDependent } from "./dependents/IDependent.interface";
import { IPhoneNumber } from "./phone-number/IPhoneNumber.interface";

export interface Iuser{
    name:string;
    email:string;
    country:string;
    state:string;
    birthDate:string;
    maritalStatus:number;
    monthlyIncome:number;
    phoneList:IPhoneNumber[];
    addressList:IAdress[];
    dependentsList:IDependent[]
}

