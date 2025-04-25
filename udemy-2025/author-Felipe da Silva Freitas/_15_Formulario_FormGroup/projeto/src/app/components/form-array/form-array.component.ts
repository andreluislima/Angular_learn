import { Component } from '@angular/core';
import { FormArray, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {
  musicasForm = new FormGroup({
    musicas: new FormArray([
      new FormControl('', [Validators.required])
    ]),
  });

  constructor(){
    console.log(this.musicasForm);
  }

  get musicas():FormArray{
    return this.musicasForm.get('musicas') as FormArray;
  }

}
