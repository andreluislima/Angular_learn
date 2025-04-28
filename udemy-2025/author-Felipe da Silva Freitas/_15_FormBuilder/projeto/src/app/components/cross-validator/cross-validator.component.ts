import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { } from '@angular/forms';

const passwordValidator:ValidatorFn = (control:AbstractControl):ValidationErrors | null =>{
  console.log('passwordValidator', control);
  const senha = control.get('senha') as FormControl;
  const confirmacaoSenha = control.get('confirmacaoSenha') as FormControl;

  if(senha?.value != confirmacaoSenha?.value){
    confirmacaoSenha?.setErrors({invalidPassword:true})
    return { invalidPassword:true};
  }

  return null;
}

@Component({
  selector: 'app-cross-validator',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cross-validator.component.html',
  styleUrl: './cross-validator.component.scss'
})
export class CrossValidatorComponent {

  pessoaForm = new FormGroup({
    senha: new FormControl(''),
    confirmacaoSenha:new FormControl(''),
  },
  {
    validators:passwordValidator,
  }
)

  mostrarForm() {
    console.log(this.pessoaForm)
  }
}
