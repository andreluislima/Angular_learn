import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form01',
  imports: [CommonModule, FormsModule],
  templateUrl: './form01.component.html',
  styleUrl: './form01.component.scss'
})
export class Form01Component {

  nome:string = "";
  telefone:string = "";

  submitForm(){
    alert(`Dados enviados: ${this.nome} - ${this.telefone}`)
  }

}
