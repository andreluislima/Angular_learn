import { Component } from '@angular/core';
import { ConteudoComponent } from "./aulas/conteudo/conteudo.component";
    
@Component({
  selector: 'app-root',
  imports: [ConteudoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 }
