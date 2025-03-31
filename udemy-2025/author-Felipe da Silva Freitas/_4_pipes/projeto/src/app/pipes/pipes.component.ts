import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { statusClassPipe } from "../pipe/status-class.pipe";


@Component({
  selector: 'app-pipes',
  imports: [CommonModule, statusClassPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  text = 'André'
  pessoa = {name:'Ana', status:1};
  pessoa2 = {name:'Maria', status:2};
  pessoa3 = {name:'Joana', status:3};



}
