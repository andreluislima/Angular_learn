import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MaritalStatusEnum } from "../enums/marital-status.enum";
import { PhoneListEnum } from "../enums/phone-list.enum";
import { AdressListEnum } from "../enums/address-list.enum";
import { Iuser } from "../interfaces/user/IUser.interface";

@Injectable({
    providedIn:'root'
})
export class UsersService{
    private readonly usersList: Iuser[] = [
        {
            name: 'Mario de Pas Almeida',
            email: 'mario@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            // maritalStatus: 1, // -> Estado Civil // -> Solteiro
            maritalStatus: MaritalStatusEnum.SINGLE,
            monthlyIncome: 5000, // -> Renda Mensal
            birthDate: '25/02/1991',
            phoneList: [
                {
                    // type: 1, // -> Residencial
                    type:PhoneListEnum.RESIDENCE,
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '1234-5678', // -> Número
                },
                {
                    type: PhoneListEnum.MOBILE,
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-2222', // -> Número
                },
                {
                     type: PhoneListEnum.EMERGENCY,
                     areaCode: '11', // -> DDD
                     internationalCode: '+55', // -> DDI
                     number: '93333-4444', // -> Número
                },
            ],
            addressList: [
                {
                    // type: 1, // -> Residencial
                    type:AdressListEnum.RESIDENCE,
                    street: 'Rua de Tal',
                    complement: 'Próximo ao parque',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Ribeirão Preto',
                },
                {
                    type:AdressListEnum.WORK,
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
                {
                    type: AdressListEnum.ALTERNATIVE,
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 12,
                    document: 22011944867,
                },
                {
                    name: 'Fulaninha',
                    age: 9,
                    document: 99988877766,
                },
            ],
        },
        {
            name: 'Laura',
            email: 'laura@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.MARRIED,
            monthlyIncome: 6000, // -> Renda Mensal
            birthDate: '12/12/1994',
            phoneList: [
                {
                    type: PhoneListEnum.EMERGENCY,
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '93333-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AdressListEnum.WORK,
                    street: 'Avenida de Tal',
                    complement: 'Próximo ao centro comercial',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'Santos',
                },
            ],
            dependentsList: [
                {
                    name: 'Fulaninho',
                    age: 5,
                    document: 22011944800,
                }
            ],
        },
        {
            name: 'Marcos',
            email: 'marcos@hotmail.com',
            country: 'Brazil',
            state: 'São Paulo',
            maritalStatus: MaritalStatusEnum.DIVORCED,
            monthlyIncome: 7000, // -> Renda Mensal
            birthDate: '11/11/1991',
            phoneList: [
                {
                    type:PhoneListEnum.MOBILE,
                    areaCode: '11', // -> DDD
                    internationalCode: '+55', // -> DDI
                    number: '91111-7777', // -> Número
                },
            ],
            addressList: [
                {
                    type: AdressListEnum.ALTERNATIVE,
                    street: 'Estrada de Tal',
                    complement: 'Próximo ao shopping',
                    country: 'Brazil',
                    state: 'São Paulo',
                    city: 'São Carlos',
                },
            ],
            dependentsList: [],
        }
    ];

    getUsers(){
        // Simulando uma chamada http assincrona.
        return new Observable((observer)=>{
            setTimeout(()=>{
                observer.next(this.usersList);
            },500);
        })
    }
}