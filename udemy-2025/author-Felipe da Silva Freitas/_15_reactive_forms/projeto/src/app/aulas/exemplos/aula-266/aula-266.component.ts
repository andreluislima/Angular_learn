import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-aula-266',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aula-266.component.html',
  styleUrl: './aula-266.component.scss'
})
export class Aula266Component {

  nome = new FormControl({value:'', disabled:true}, [Validators.required]);


  desabilitar(){
    this.nome.disable();
  }

  habilitar(){
    this.nome.enable();
  }

}
