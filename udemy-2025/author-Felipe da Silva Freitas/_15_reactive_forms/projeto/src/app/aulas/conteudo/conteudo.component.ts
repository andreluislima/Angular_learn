import { Component } from '@angular/core';
import { Aula263Component } from "../exemplos/aula-264/aula-264.component";
import { Aula265Component } from "../exemplos/aula-265/aula-265.component";
import { Aula266Component } from "../exemplos/aula-266/aula-266.component";

 @Component({
  selector: 'app-conteudo',
  imports: [Aula263Component, Aula265Component, Aula266Component],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {

}
