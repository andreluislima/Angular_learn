import { Component } from '@angular/core';

@Component({
  selector: 'app-attribut-binding',
  imports: [],
  standalone:true,
  templateUrl: './attribut-binding.component.html',
  styleUrl: './attribut-binding.component.scss'
})
export class AttributBindingComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = true;
  
   buttonTitle = "Titulo do Botão"
   buttonDisable = false;

   onButtonClick(){
    this.buttonTitle = 'Titulo Alterado de novo'
    this.buttonDisable = !this.buttonDisable;
   }
}