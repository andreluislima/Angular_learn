import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeferIntroducaoComponent } from "./aulas/defer-introducao/defer-introducao.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DeferIntroducaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto';
}
