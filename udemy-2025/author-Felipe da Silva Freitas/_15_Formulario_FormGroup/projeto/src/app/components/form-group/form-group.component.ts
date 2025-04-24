import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {

  pessoaForm = new FormGroup({
    nome: new FormControl('', Validators.required),// O que torna esse campo valido? ELe precisa ser preenchido. Não pode estar vazio.
    email: new FormControl('', Validators.required)
  })

  constructor(){
    console.log(this.pessoaForm);
  }

  mostrarValue() {
    console.log(this.pessoaForm.value);
  }
}
