import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserValidatorService } from './user-validator.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aula-274',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  standalone:true,
  templateUrl: './aula-274.component.html',
  styleUrl: './aula-274.component.scss'
})
export class Aula274Component {
  nome!: FormControl;

  constructor(
    private readonly userValidatorService: UserValidatorService
  ) {}

  ngOnInit() {
    this.nome = new FormControl('', {
      asyncValidators: [this.userValidatorService.validate.bind(this.userValidatorService)],
      updateOn:'blur' // Por padrão é change, emite uma resposta http sempre que alteramos algo no input no 'blur' apenas quando saimos do input 
    });
  }
}