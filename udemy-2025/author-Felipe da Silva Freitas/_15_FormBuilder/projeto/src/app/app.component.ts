import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MarkAsTouchedComponent } from "./components/mark-as-touched/mark-as-touched.component";

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, MarkAsTouchedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 }
