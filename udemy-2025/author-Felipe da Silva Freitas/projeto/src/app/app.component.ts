import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { CardsComponent } from './aulas/card/card.component';
// import { CardRoxoComponent } from "./aulas/card-roxo/card-roxo.component";
import { PropBindingComponent } from "./03_property_binging/prop-binding/prop-binding.component";
import { EventBindingComponent } from "./03_property_binging/event-binding/event-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EventBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto';
}
