import { Component } from '@angular/core';
import { TesteComponent } from "./components/teste/teste.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { FilterComponent } from "./components/filter/filter.component";
  
@Component({
  selector: 'app-root',
  imports: [TesteComponent, UserDetailsComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   
}
