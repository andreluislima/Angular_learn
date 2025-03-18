import { Component } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  imports: [],
  templateUrl: './text-interpolation.component.html',
  styleUrl: './text-interpolation.component.scss'
})
export class TextInterpolationComponent {

  public name:string = 'André';
  public sobrenome:string = 'lima';
  public idade:number = 35;

}
