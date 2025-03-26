import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  imports: [],
  standalone:true,
  templateUrl: './prop-binding.component.html',
  styleUrl: './prop-binding.component.scss'
})
export class PropBindingComponent {

  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = true;
  
  enableInput(){
    this.isDisabled = false;
  }

  disabledInput(){
    this.isDisabled = true;
  }

  setText(){
    this.inputType = "text";
  }

  setPassword(){
    this.inputType = "password";
  }
}

