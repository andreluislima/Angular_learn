import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required:true, alias:'text'}) 
  btnText:string = '';
  
  @Input({required:true, alias:'style'}) 
  btnStyle: 'white' | 'purple' = 'white';

  @Input({alias:'disabled'})
  isDisabled:boolean = false;

  @Output('clicked') buttonClickedEmitt = new EventEmitter<void>();

  onButtonClicked(){
    this.buttonClickedEmitt.emit();
  }
}
