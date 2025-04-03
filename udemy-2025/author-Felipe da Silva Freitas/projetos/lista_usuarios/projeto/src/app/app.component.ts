import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { FilterComponent } from "./components/filter/filter.component";
import { UsersListComponent } from "./components/users-list/users-list.component";
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOpions } from './interfaces/user/filter-options.interface';
   
@Component({
  selector: 'app-root',
  imports: [UserDetailsComponent, FilterComponent, UsersListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
 
   userSelected:IUser = {} as IUser; // Preve que o objeto pode vir vazio.
   showUserDetails:boolean = false;
   usersList:IUser[] = [];

   onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
   }

   // Usado para carregar os dados numa chamada HTTP
   ngOnInit(){
    setTimeout(() => {
      console.log('OnInit carregado como teste')
      this.usersList = UsersList;
    },1000)
  }

  onFilter(filterOpions:IFilterOpions){
    console.log(filterOpions)
  }
 
}
