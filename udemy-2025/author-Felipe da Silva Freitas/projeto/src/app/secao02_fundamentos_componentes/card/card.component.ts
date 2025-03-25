import { Component } from '@angular/core';
import { CardBtnComponent } from "../card-btn/card-btn.component";
import { CardBtnCancelComponent } from "../card-btn-cancel/card-btn-cancel.component";

interface ICurso{
  infos:Iinfos;
}

interface Iinfos{
  tipo:string,
  preco:number
}

@Component({
  selector: 'app-card',
  imports: [CardBtnComponent, CardBtnCancelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardsComponent {

  // tipo = 'Plano';
  // preco = 1000;

  // getFullPrice(){
  //   setTimeout(() =>{
  //     console.log('setTimeout')
  //     this.tipo = 'Simples'
  //   }, 4000)
  //   return 'R$' + this.preco + ',00/Mês';
  // }

  // Objeto simples
    // plano = {
    //   tipo:'Simples',
    //   preco:100
    // };

    // Propriedades que são outros objetos
    plano = {
      infos: {
        tipo:'Simples',
        preco:100
      }
    };

    // Ignora a propriedade ser undefined
    // @ts-ignore 
    servico:any = {
      infos:undefined,
    };

    curso:ICurso = {
      infos:{
        tipo:'simples',
        preco:100
      }
    }

  

}
