import { Component } from '@angular/core';
import { CardRoxoBtnComponent } from "../card-roxo-btn/card-roxo-btn.component";
import { CardBtnCancelComponent } from "../card-btn-cancel/card-btn-cancel.component";

@Component({
  selector: 'app-card-roxo',
  imports: [CardRoxoBtnComponent, CardBtnCancelComponent],
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {

}
