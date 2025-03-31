import { Component } from '@angular/core';
import { PipesComponent } from "./pipes/pipes.component";
   
@Component({
  selector: 'app-root',
  imports: [PipesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 }
