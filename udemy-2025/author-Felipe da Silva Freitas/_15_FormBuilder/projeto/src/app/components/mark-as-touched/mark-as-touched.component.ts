import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-mark-as-touched',
  imports: [ReactiveFormsModule],
  templateUrl: './mark-as-touched.component.html',
  styleUrl: './mark-as-touched.component.scss'
})
export class MarkAsTouchedComponent implements OnInit {



  pessoaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })

  ngOnInit(){
     setTimeout(()=>{
      console.log('Touched PessoaForm', this.pessoaForm.touched);
      console.log('Touched NomeControl', this.pessoaForm.get('nome')?.touched);
      console.log('Touched EmailControl', this.pessoaForm.get('email')?.touched);

     },4000)
  }

  markNomeAsTouched() {
    console.log('markAllAsTouched')
    this.pessoaForm.get('nome')?.markAllAsTouched();
  }
}
