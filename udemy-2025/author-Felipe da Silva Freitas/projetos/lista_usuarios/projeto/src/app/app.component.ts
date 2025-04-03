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
   usersList:IUser[] = []; // Lista original que vem da 'chamada http'
   userListFiltered:IUser[] = []; // Lista filtrada


   onUserSelected(user: IUser){
    this.userSelected = user;
    this.showUserDetails = true;
   }

   // Usado para carregar os dados numa chamada HTTP
   ngOnInit(){
    setTimeout(() => {
      console.log('OnInit carregado como teste')
      this.usersList = UsersList;
      this.userListFiltered = UsersList;
    },1)
  }

  onFilter(filterOpions:IFilterOpions){
    this.userListFiltered = this.filterUsersList(filterOpions, this.usersList)
    // console.log(filterOpions)
  }

  
  filterUsersList(filterOpions: IFilterOpions, usersList: IUser[]): IUser[] {
     let filteredList: IUser[] = [];
     filteredList = this.filterUsersListByName(filterOpions.name, usersList);
     return filteredList;
  }
  
  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
     const NAME_NOT_TYPPED = name === undefined;

     // Se o nome for undefined, se nao houver nada no nome...
     if(NAME_NOT_TYPPED){
      return usersList;
     }

     //Logica de filtro
     const filteredList = usersList.filter((user)=> user.nome.toLowerCase().includes(name.toLowerCase()));

    //  console.log(filteredList);
     return filteredList;
  }


}

/* NOTAS */

  // Quando criar um metodo crie um metodo puro, que recebe os mesmos inputs, faça o mesmo processamento, e retorne
  // sempre o mesmo tipo de output e nao fique alterando propriedades externas na classe.