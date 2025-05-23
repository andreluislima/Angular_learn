import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";
import { UsersService } from "./Users.service";


@Injectable({
    providedIn:'root'
})

export class UserValidatorService implements AsyncValidator{

    // Fazendo uma injeção de dependencia do 'user.service'
    constructor(
        private readonly _usersService:UsersService
    ){}

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

        if(!control.dirty){
            return of(null);
        }
         return this._usersService.getUsers().pipe(
            delay(3000),
            // Será dentro do 'map' que será feita a logica de verificao do nome.
            map((usersList)=>{
                const hasUser = usersList.find((user) => user.name.toLowerCase()=== control.value.trim().toLowerCase());
                if(hasUser){
                  return  null; // formulario valido
                }

                return {userValidator:true}
            }),
         );
    }
    
}