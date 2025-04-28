import { Component, OnInit } from '@angular/core';
import { MainListComponent } from "./components/main-list/main-list.component";
import { UsersDetailsComponent } from "./components/users-details/users-details.component";
import { IUser } from '../interfaces/user/user.interface';
import { CommonModule } from '@angular/common';
import { UsersList } from '../data/users-list';
import { UsuarioServiceTsService } from './services/usuario.service.ts.service';
import { FilterListComponent } from "./components/filter-list/filter-list.component";
import { IFilterOptions } from '../interfaces/user/filter-options.interface';

@Component({
  selector: 'app-root',
  imports: [MainListComponent, UsersDetailsComponent, CommonModule, FilterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  userSelected:IUser = {} as IUser;
  showUsersDetails:boolean = false; // Começa como false pq inicialmente nao quero exibir os detalhes.
  usersList:IUser[] = [];
  listaFiltrada:IUser[] = [];

  constructor(private usuarioService:UsuarioServiceTsService){}
   
  onUserSelected(user:IUser){
    this.userSelected = user;
    this.showUsersDetails = true; // quando o evento for acionado pelo click, a prop:showUSerDetails será true;

  }

  ngOnInit(){

    this.usuarioService.getUsuarios().subscribe(users =>{
    this.usersList = users;
    this.listaFiltrada = users;
    console.log('Dados carregados com sucesso!');

        /* Antigo
          setTimeout(()=>{
           console.log('Dados carregados com sucesso')
           this.usersList = UsersList;
         }, 1000)
       }*/

  })};

  filtro(filterOptions:IFilterOptions){
    console.log(filterOptions);
    this.listaFiltrada = this.usuariosFiltrados(filterOptions, this.usersList); 
    // vai receber o retorno do metodo 'usuariosFiltrados' que vai ser o método que vai executar a logica de filtro e retornar a lista filtrada.

  }

  usuariosFiltrados(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
     let listaFiltrada:IUser[] = [];
     
     listaFiltrada = this.usuariosFiltradosByName(filterOptions.nome, usersList);


     return listaFiltrada;
  }
  usuariosFiltradosByName(nome: string | undefined, usersList: IUser[]): IUser[] {

     const NOME_VAZIO = nome === undefined;
     
     if(NOME_VAZIO){
      return usersList;
     }

     const listaFiltrada = usersList.filter((user) => user.nome.toLowerCase().includes(nome.toLowerCase()));

     return listaFiltrada;
  }

  
}


