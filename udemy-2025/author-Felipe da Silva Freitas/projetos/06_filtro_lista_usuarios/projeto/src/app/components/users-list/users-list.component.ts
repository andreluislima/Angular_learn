import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { IUser } from '../../interfaces/user/user.interface';
import { StatusPipe } from "../../pipes/status.pipe";
import { DatePipe } from '@angular/common';
import { DashIfEmptyPipe } from "../../pipes/dash-if-empty.pipe";

@Component({
  selector: 'app-users-list',
  imports: [MatTableModule, StatusPipe, DatePipe, DashIfEmptyPipe],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  displayedColumns:string[] = ['name', 'date', 'status'];
  @Input({required:true}) usersList:IUser[] = [];

  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();


  onUserSelected(user:IUser){
    // console.log('user', user)
  this.userSelectedEmitt.emit(user);

  }

}
