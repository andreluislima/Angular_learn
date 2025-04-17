import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-aula-270',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './aula-270.component.html',
  styleUrl: './aula-270.component.scss'
})
export class Aula270Component {
  nome = new FormControl('Inicial', [Validators.required, Validators.minLength(6)]);

  mostrarStatus() {
    console.log(this.nome)
  } 
  resetar(){
    this.nome.reset();
  }

}
