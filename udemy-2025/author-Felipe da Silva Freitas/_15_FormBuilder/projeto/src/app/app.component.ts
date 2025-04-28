import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkAsTouchedComponent } from "./components/mark-as-touched/mark-as-touched.component";
import { CrossValidatorComponent } from "./components/cross-validator/cross-validator.component";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, MarkAsTouchedComponent, CrossValidatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 }
