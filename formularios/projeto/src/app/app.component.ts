import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form01Component } from "../components/pages/form01/form01.component";

@Component({
  selector: 'app-root',
  imports: [Form01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto';
}
