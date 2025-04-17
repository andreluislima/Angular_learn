import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-aula-268',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aula-268.component.html',
  styleUrl: './aula-268.component.scss'
})
export class Aula268Component {
  nome = new FormControl('Inicial', [Validators.required, Validators.minLength(6)]);

  mostrarStatus() {
    console.log(this.nome)
  } 
  resetar(){
    this.nome.reset();
  }

}
