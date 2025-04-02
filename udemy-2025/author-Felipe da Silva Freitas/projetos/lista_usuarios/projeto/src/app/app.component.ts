import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { FilterComponent } from "./components/filter/filter.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { IUser } from './interfaces/user/user.interface';
   
@Component({
  selector: 'app-root',
  imports: [UserDetailsComponent, FilterComponent, UsersListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   userSelected:IUser = {} as IUser; // Preve que o objeto pode vir vazio.
   showUserDetails:boolean = false;

   onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
   }
}
