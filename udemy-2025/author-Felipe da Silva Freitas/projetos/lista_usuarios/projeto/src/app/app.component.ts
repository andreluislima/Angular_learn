import { Component } from '@angular/core';
import { TesteComponent } from "./components/teste/teste.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
  
@Component({
  selector: 'app-root',
  imports: [TesteComponent, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   
}
