import { Component } from '@angular/core';
import { MainListComponent } from "./components/main-list/main-list.component";
   
@Component({
  selector: 'app-root',
  imports: [MainListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto';
}
