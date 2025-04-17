import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aula-274',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './aula-274.component.html',
  styleUrl: './aula-274.component.scss'
})
export class Aula274Component {
  nome = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]);

  mostrarStatus() {
    console.log(this.nome)
  } 
  resetar(){
    this.nome.reset();
  }
}
