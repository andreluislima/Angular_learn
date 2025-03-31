import { Component } from '@angular/core';
import { TesteComponent } from "./components/teste/teste.component";
  
@Component({
  selector: 'app-root',
  imports: [TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   
}
