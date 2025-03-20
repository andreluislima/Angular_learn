import { Component } from '@angular/core';

@Component({
  selector: 'app-defer-on',
  imports: [],
  templateUrl: './defer-on.component.html',
  styleUrl: './defer-on.component.scss'
})
export class DeferOnComponent {

  public isUserLoggedIn:boolean = false;
  login(){
    this.isUserLoggedIn = true;
  }
}
