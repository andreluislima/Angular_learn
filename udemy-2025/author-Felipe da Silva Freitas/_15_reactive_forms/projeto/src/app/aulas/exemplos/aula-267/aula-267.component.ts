import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-aula-267',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aula-267.component.html',
  styleUrl: './aula-267.component.scss'
})
export class Aula267Component {
  nome = new FormControl('Inicial', [Validators.required]);

  mostrarStatus() {
    console.log(this.nome)
  } 
  resetar(){
    this.nome.reset();
  }

 
}
