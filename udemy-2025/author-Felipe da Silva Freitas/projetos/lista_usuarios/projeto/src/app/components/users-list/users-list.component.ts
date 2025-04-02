import { Component, EventEmitter, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';
import { StatusPipe } from "../../pipes/status.pipe";
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DashIfEmptyPipe } from "../../pipes/dash-if-empty.pipe";

@Component({
  selector: 'app-users-list',
  imports: [MatTableModule, StatusPipe, DatePipe, DashIfEmptyPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  displayedColumns:string[] = ['name', 'date', 'status'];
  usersList:IUser[] = UsersList;

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();


  onUserSelected(user:IUser){
    // console.log('user', user)
  this.userSelectedEmitt.emit(user);

  }

}
