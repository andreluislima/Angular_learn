import { Component } from '@angular/core';
import { Aula263Component } from "../exemplos/aula-264/aula-264.component";
import { Aula265Component } from "../exemplos/aula-265/aula-265.component";
import { Aula266Component } from "../exemplos/aula-266/aula-266.component";
import { Aula267Component } from "../exemplos/aula-267/aula-267.component";
import { Aula268Component } from "../exemplos/aula-268/aula-268.component";
import { Aula270Component } from "../exemplos/aula-270/aula-270.component";

 @Component({
  selector: 'app-conteudo',
  imports: [Aula263Component, Aula265Component, Aula266Component, Aula267Component, Aula268Component, Aula270Component],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.scss'
})
export class ConteudoComponent {

}
