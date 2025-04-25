import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss'
})
export class FormBuilderComponent implements OnInit{
  pessoaForm!:FormGroup;

  constructor(
    private readonly fb:FormBuilder
  ){}


  ngOnInit(): void {
    this.pessoaForm = this.fb.group({

      // 2 formas de criar controls com o Form Builder
      nome:['', [Validators.required]],
      email: this.fb.control('', {validators:[Validators.required]}),
      // grupo filho:
      endereco:this.fb.group({
        rua:['', [Validators.required]],
        numero:[['', [Validators.required]]]
      }),

      //Forms Arrays
      musicas:this.fb.array([
        ['', [Validators.required]]
      ])

    })
  }

}