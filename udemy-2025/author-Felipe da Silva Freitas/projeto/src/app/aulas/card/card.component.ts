import { Component } from '@angular/core';
import { CardBtnComponent } from "../card-btn/card-btn.component";

@Component({
  selector: 'app-card',
  imports: [CardBtnComponent],
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

}
