import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  imports: [MatTableModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  displayedColumns:string[] = ['name', 'date', 'status'];
  usersList:IUser[] = UsersList;

  onUserSelected(user:IUser){
    console.log('user', user)
  }

}
