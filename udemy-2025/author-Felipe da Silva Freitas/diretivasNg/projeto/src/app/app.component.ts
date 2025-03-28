import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './aulas/card/card.component';
import { CardRoxoComponent } from "./aulas/card-roxo/card-roxo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardsComponent, CardRoxoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto';
}
