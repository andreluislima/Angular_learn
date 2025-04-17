import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-aula-264',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './aula-264.component.html',
  styleUrl: './aula-264.component.scss'
})
export class Aula263Component {
nome = new FormControl('valor inicial');


mostrarStatus() {
  console.log(this.nome)
}

}
