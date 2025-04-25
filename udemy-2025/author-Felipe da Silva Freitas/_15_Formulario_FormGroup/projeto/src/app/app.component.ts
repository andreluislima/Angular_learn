import { Component } from '@angular/core';
import { FormArrayComponent } from "./components/form-array/form-array.component";
    
@Component({
  selector: 'app-root',
  imports: [FormArrayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 }
