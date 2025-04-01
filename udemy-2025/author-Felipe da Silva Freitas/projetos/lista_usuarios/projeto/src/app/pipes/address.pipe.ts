import { Pipe, PipeTransform } from '@angular/core';
import { IAdress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address:IAdress | undefined): string {
    const INVALID_ADRESS = 
      !address ||
      !address.rua || 
      !address.cidade ||
      !address.estado ||
      address.numero === null || address.numero === undefined;

      if(INVALID_ADRESS){
        return 'Endereço indisponivel ou inválido';
      }

      return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}`

  }

}
