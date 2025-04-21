import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserValidatorService } from './user-validator.service';

@Component({
  selector: 'app-aula-274',
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './aula-274.component.html',
  styleUrl: './aula-274.component.scss'
})
export class Aula274Component {
  nome!: FormControl;

  constructor(
    private readonly _userValidatorService: UserValidatorService
  ) {
    this.nome = new FormControl('', {
      asyncValidators: [
        this._userValidatorService.validate.bind(this._userValidatorService)
      ],
      updateOn: 'blur',
    });
  }
}
