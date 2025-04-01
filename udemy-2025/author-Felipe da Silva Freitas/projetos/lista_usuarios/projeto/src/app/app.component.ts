import { Component } from '@angular/core';
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { FilterComponent } from "./components/filter/filter.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
  
@Component({
  selector: 'app-root',
  imports: [UserDetailsComponent, FilterComponent, UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   
}
