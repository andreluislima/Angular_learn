import { Component } from '@angular/core';
import { FormGroupComponent } from "./components/form-group/form-group.component";
    
@Component({
  selector: 'app-root',
  imports: [FormGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 }
