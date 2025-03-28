import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card',
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({required:true, alias:'type'})
  planType:string = '';

  @Input({required:true, alias:'price'})
  planPrice:number = 0;

  @Input({required:true, alias:'style'})
  cardStyle:'orange' | 'purple' = 'orange';


}
