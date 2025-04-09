import { Component } from '@angular/core';
import { MainListComponent } from "./components/main-list/main-list.component";
import { UsersDetailsComponent } from "./components/users-details/users-details.component";
import { IUser } from '../interfaces/user/user.interface';
import { CommonModule } from '@angular/common';
import { UsersList } from '../data/users-list';

@Component({
  selector: 'app-root',
  imports: [MainListComponent, UsersDetailsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  userSelected:IUser = UsersList[2];
   
  onUserSelected(user:IUser){
    this.userSelected = user;
  }

}
