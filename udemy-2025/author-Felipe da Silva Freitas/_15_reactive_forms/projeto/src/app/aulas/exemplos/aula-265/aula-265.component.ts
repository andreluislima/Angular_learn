import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-aula-265',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aula-265.component.html',
  styleUrl: './aula-265.component.scss'
})
export class Aula265Component {
  nome = new FormControl('valor inicial');

  mostrarStatus() {
    console.log(this.nome)
  } 

  alterarValor() {
    this.nome.setValue('Alterado!!!');
  }

  inputAlterado(){
    console.log(this.nome.value);
  }
}
