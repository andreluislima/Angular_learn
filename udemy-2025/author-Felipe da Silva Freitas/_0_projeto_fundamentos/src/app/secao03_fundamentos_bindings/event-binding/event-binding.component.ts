import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

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

  handleInputKeyUp(event: KeyboardEvent){
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }

  handleInputEvent(event:Event){
    const currentText = (event.target as HTMLInputElement).value;
    console.log(currentText);
  }
}
