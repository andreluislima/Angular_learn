import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialComponent } from "./angular-material/angular-material/angular-material.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularMaterialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
