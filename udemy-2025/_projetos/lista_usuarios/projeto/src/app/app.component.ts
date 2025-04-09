import { Component } from '@angular/core';
import { MainListComponent } from "./components/main-list/main-list.component";
import { UsersDetailsComponent } from "./components/users-details/users-details.component";
import { IUser } from '../interfaces/user/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MainListComponent, UsersDetailsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  // userSelected:IUser = UsersList[2]; -- dado 'chumbado'
  userSelected:IUser = {} as IUser;
  showUsersDetails:boolean = false; // Começa como false pq inicialmente nao quero exibir os detalhes.
  usersList:IUser[] = [];

   
  onUserSelected(user:IUser){
    this.userSelected = user;
    this.showUsersDetails = true; // quando o evento for acionado pelo click, a prop:showUSerDetails será true;


  }

}
