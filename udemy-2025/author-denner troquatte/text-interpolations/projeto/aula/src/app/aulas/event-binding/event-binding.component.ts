import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

  public name = "André"
  public age = 13;

  public sum(){
    return this.age ++;
  }

  public sub(){
    return this.age --;
  }

  public onKeyDow(event:Event){
    return console.log(event);
  }

  public onMouseMove(event: MouseEvent): void {
    alert('Oi')
  }
}
