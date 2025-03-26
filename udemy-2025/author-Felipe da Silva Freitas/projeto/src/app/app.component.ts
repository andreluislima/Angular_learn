import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributBindingComponent } from './secao03_fundamentos_bindings/attribut-binding/attribut-binding.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AttributBindingComponent],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto';
}